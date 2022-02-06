/** @type {import('next').NextConfig} */
module.exports = {
  onDemandEntries: {
    maxInactiveAge: 1000 * 60 * 60,
  },
  reactStrictMode: true,
  experimental: {
    concurrentFeatures: true,
    reactRoot: true,
  },
};
