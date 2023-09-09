module.exports = {
    // ...
    reactStrictMode: true,
  experimental: {
    reactRoot: true,
  },
    async rewrites() {
      return [
        {
          source: '/connect',
          destination: '/src/app/connect',
        },
      ];
    },
  };
  