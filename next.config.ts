import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        // protocol: "https",
        hostname: "directus-nxrr.onrender.com",
        // pathname: "/assets/**",
      },
    ],
  },
};

export default nextConfig;
