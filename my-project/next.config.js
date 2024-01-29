/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["raw.githubusercontent.com", "localhost", "images.unsplash.com"],
  },
};

module.exports = nextConfig;
