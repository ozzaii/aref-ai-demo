/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  basePath: '',
  assetPrefix: '',
  trailingSlash: true,
  
  env: {
    BASE_PATH: process.env.NODE_ENV === 'production' ? '/aref-ai-demo' : '',
  },
};

module.exports = nextConfig; 