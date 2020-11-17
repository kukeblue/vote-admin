const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://paper.lantushiji.cn',
      // target: 'https://app.dayanjiaoyu.com',
      changeOrigin: true,
    })
  );
};