const CracoLessPlugin = require('craco-less');

module.exports = {
  eslint: {
    enable: false,
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#FF6A00' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};