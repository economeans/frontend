const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa");

const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com", "ssl.pstatic.net", "k.kakaocdn.net"],
  },
  reactStrictMode: true,
  output: "standalone",
};

module.exports = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  customWorkerDir: "worker",
  runtimeCaching,
})(nextConfig);
