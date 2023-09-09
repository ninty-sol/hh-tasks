module.exports = {
    // ...
    async rewrites() {
      return [
        {
          source: '/connect',
          destination: '/src/app/connect',
        },
      ];
    },
  };
  