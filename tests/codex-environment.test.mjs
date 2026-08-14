import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { mkdtemp, readFile, realpath, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";

const root = await realpath(new URL("../", import.meta.url));

async function waitFor(check, timeoutMs = 3_000) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    if (await check()) return;
    await new Promise((resolve) => setTimeout(resolve, 50));
  }
  throw new Error("Timed out waiting for local test server state.");
}

async function startServer(cwd) {
  const child = spawn(
    process.execPath,
    [
      "--input-type=module",
      "--eval",
      "import http from 'node:http'; const server=http.createServer((_req,res)=>res.end('ok')); server.listen(0,'127.0.0.1',()=>console.log(server.address().port));",
    ],
    { cwd, stdio: ["ignore", "pipe", "pipe"] },
  );
  const port = await new Promise((resolve, reject) => {
    child.once("error", reject);
    child.stdout.once("data", (chunk) => resolve(Number(chunk.toString().trim())));
  });
  return { child, port };
}

test("Codex environment delegates ordered Setup, Run, Validate, and Stop actions", async () => {
  const toml = await readFile(new URL("../.codex/environments/environment.toml", import.meta.url), "utf8");
  assert.match(toml, /version = 1/);
  assert.match(toml, /name = "Unsloth Studio Learning"/);
  assert.match(toml, /script = "npm ci"/);
  assert.deepEqual([...toml.matchAll(/^name = "([^"]+)"$/gm)].map((match) => match[1]).slice(1), [
    "Run",
    "Validate",
    "Stop",
  ]);
  assert.deepEqual([...toml.matchAll(/^command = "([^"]+)"$/gm)].map((match) => match[1]), [
    "npm run dev:codex",
    "npm run validate:codex",
    "npm run stop:codex",
  ]);
});

test("Stop closes a listener owned by this checkout", async () => {
  const { stopDevServer } = await import("../scripts/stop-dev.mjs");
  const server = await startServer(root);
  try {
    await stopDevServer(server.port);
    await waitFor(() => Promise.resolve(server.child.exitCode !== null || server.child.signalCode !== null));
    assert.ok(server.child.exitCode !== null || server.child.signalCode !== null);
  } finally {
    if (server.child.exitCode === null && server.child.signalCode === null) server.child.kill("SIGKILL");
  }
});

test("Stop refuses a listener owned by another working directory", async () => {
  const { stopDevServer } = await import("../scripts/stop-dev.mjs");
  const foreignDirectory = await mkdtemp(join(tmpdir(), "usl-foreign-listener-"));
  const server = await startServer(foreignDirectory);
  try {
    await assert.rejects(stopDevServer(server.port), /another working directory/);
    assert.equal(server.child.exitCode, null);
  } finally {
    if (server.child.exitCode === null && server.child.signalCode === null) server.child.kill("SIGKILL");
    await rm(foreignDirectory, { recursive: true, force: true });
  }
});
