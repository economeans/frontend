const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
  customWorkerDir: "worker",
  runtimeCaching,
});

module.exports = withPWA({
  compiler: {
    removeConsole: true,
  }
});
