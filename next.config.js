import withPWA from 'next-pwa';
import runtimeCaching from 'next-pwa/cache';

export default withPWA({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
  customWorkerDir: 'worker',
  runtimeCaching,
});
