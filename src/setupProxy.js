const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://uc.yxsjob.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    })
  );
};