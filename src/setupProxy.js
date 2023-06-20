const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://red666.somee.com/WeatherForecast', // the url of your backend
      changeOrigin: true, // needed for virtual hosted sites
    })
  );
};
