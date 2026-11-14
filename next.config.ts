import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep the Google Ads landing page separate from the existing website layout.
  async rewrites() {
    return [{ source: "/mobile-tyre-fitting", destination: "/ads/melis/index.html" }];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
      },
    ],
  },
};

export default nextConfig;
