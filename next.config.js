/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["myceliademo.blob.core.windows.net"],
  },
};

module.exports = nextConfig;
