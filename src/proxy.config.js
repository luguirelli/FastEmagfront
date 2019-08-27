const proxy = [
    {
      context: '/api',
      target: 'http://localhost:5432',
      pathRewrite: { '^/api': '' }
    }
  ];
  module.exports = proxy;