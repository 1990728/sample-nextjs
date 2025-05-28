// next.config.js
module.exports = {
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://xxxxx.com/r?path=:path*', // Add a query key (e.g., `path=`)
        permanent: true,
      },
    ];
  },
};
