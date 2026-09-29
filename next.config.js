/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
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
