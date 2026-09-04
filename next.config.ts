import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/Portfolio" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
