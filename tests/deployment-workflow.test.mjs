import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const workflowUrl = new URL("../.github/workflows/deploy-swa-usl-aserdargun-com.yml", import.meta.url);

test("the production workflow builds and serially uploads only the verified out artifact", async () => {
  const workflow = await readFile(workflowUrl, "utf8");
  const actionUses = [...workflow.matchAll(/^\s+(?:- )?uses: ([^\s]+)$/gm)].map((match) => match[1]);

  assert.match(workflow, /branches: \[main\]/);
  assert.match(workflow, /workflow_dispatch:/);
  assert.match(workflow, /permissions:\n {2}contents: read/);
  assert.match(workflow, /group: swa-usl-aserdargun-com-production/);
  assert.match(workflow, /cancel-in-progress: false/);
  assert.ok(actionUses.length >= 3);
  assert.ok(actionUses.every((use) => /@[0-9a-f]{40}$/.test(use)));
  assert.match(workflow, /npm run lint/);
  assert.match(workflow, /npm run typecheck/);
  assert.match(workflow, /npm test/);
  assert.match(workflow, /app_location: out/);
  assert.match(workflow, /skip_app_build: true/);
  assert.match(workflow, /output_location: ""/);
  assert.match(workflow, /secrets\.AZURE_STATIC_WEB_APPS_API_TOKEN_SWA_USL_ASERDARGUN_COM/);
  assert.doesNotMatch(workflow, /repo_token:/);
});

test("no obsolete Azure deployment workflow remains active", async () => {
  await assert.rejects(access(new URL("../.github/workflows/azure-static-web-apps.yml", import.meta.url)));
});
