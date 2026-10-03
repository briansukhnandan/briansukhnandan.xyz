/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/admin",
        destination: "/admin/index.html",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/blog",
        destination: "/writings",
        permanent: true,
      },
      {
        source: "/blog/:slug",
        destination: "/writings/:slug",
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
