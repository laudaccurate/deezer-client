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
  trailingSlash: true,
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
