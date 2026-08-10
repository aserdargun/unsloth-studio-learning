import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  ...(process.env.IS_STATIC_EXPORT === "true" ? { output: "export" as const, trailingSlash: true } : {}),
  images: {
    unoptimized: true,
  },
  typescript: {
    tsconfigPath: "tsconfig.azure.json",
  },
};

export default nextConfig;
