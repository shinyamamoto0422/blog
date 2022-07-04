/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/blogs/page/1",
      },
    ];
  },
};

module.exports = nextConfig;
