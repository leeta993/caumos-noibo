import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/danh-gia-nang-luc",
        destination: "/danh-gia-nang-luc.html",
      },
      {
        source: "/caumos-1-0",
        destination: "/caumos-1-0/index.html",
      },
    ];
  },
};

export default nextConfig;
