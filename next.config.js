// next.config.js
module.exports = {
  async redirects() {
    return [
      {
        source: '/:path*', // Matches all paths (e.g., /adasdas, /foo/bar)
        destination: 'https://mtinpad.com/r?:path*', // Redirects to the same path on the new domain
        permanent: true, // Use true for 308 (permanent) or false for 307 (temporary)
      },
    ];
  },
};
