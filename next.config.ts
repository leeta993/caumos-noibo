import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/danh-gia-nang-luc",
        destination: "/danh-gia-nang-luc.html",
      },
    ];
  },
};

export default nextConfig;
