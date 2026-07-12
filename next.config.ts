import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/slides.html",
      },
    ];
  },
};

export default nextConfig;
