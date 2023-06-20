const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://red666.somee.com', // the url of your backend
      changeOrigin: true, // needed for virtual hosted sites
    })
  );
};
