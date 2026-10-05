/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "c.animaapp.com",
        pathname: "/mhjqsyis9DbJQx/img/**",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
    serverComponentsExternalPackages: ['nodemailer'],
  },
  async redirects() {
    return [
      {
        source: '/demander-audit',
        destination: '/contact',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
