/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        // protocol: "https",
        hostname: process.env.NEXT_PUBLIC_HOST_URL,
      },
      {
        hostname: process.env.NEXT_PUBLIC_HOST_URL_IP,
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/auth",
        destination: "/auth/login",
        permanent: true,
      },
      {
        source: "/",
        destination: "/dashboard",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
