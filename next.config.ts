import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true, // Add this for production hosting without optimization
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
        pathname: '/media/**',
      },
      {
        protocol: 'https',
        hostname: 'devmonablogpost.s3.amazonaws.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.simpleicons.org',
        pathname: '/**',
      },
    ],
  },
  async rewrites(){
    return [
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap",
      },
      {
        source: "/robots.txt",
        destination: "/api/robots",
      },
    ]
  },
};

export default nextConfig;
