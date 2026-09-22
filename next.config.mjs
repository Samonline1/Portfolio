import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/Portfolio" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
