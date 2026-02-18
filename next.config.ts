module.exports = {
  images: {
    unoptimized: true,
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/main',
        permanent: true,
      },
    ];
  },
};
