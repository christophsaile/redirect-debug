import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/about/me",
        destination: "/me?ref=about",
        permanent: true,
      },
      {
        source: "/",
        destination: "/lol/?path=foo",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
