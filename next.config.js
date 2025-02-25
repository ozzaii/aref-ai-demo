/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/aref-ai-demo' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/aref-ai-demo/' : '',
  trailingSlash: true,
  
  env: {
    BASE_PATH: process.env.NODE_ENV === 'production' ? '/aref-ai-demo' : '',
  },
};

module.exports = nextConfig; 