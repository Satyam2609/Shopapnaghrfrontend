/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { appDir: true },
  srcDir: 'src',
  images: {
    domains: ['backend-production-6079.up.railway.app'], // backend domain yahan
  },
};

export default nextConfig;
