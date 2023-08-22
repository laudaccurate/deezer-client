/** @type {import('next').NextConfig} */

const compiler = {};
if (process.env.NODE_ENV === "production") {
  compiler.removeConsole = {
    exclude: ["error"],
  };
}

const nextConfig = {
  reactStrictMode: true,
  compiler,
  env: {
    CAPTCHA_SITE_KEY: process.env.CAPTCHA_SITE_KEY,
    API_KEY: process.env.API_KEY,
    API_SECRET: process.env.API_SECRET,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    domains: ["unsplash.com", "api.deezer.com"],
  },
  distDir: "build",
  // output: "export",
};

module.exports = nextConfig;
