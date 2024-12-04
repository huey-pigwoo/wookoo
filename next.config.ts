import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // 启用 React 严格模式
  swcMinify: true,       // 启用 SWC 编译器优化（推荐）
};

export default nextConfig;

