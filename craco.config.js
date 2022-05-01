const CracoLessPlugin = require("craco-less");

module.exports = (webpackEnv) => {
  return {
    plugins: [
      {
        plugin: CracoLessPlugin,
        options: {
          lessLoaderOptions: {
            lessOptions: {
              modifyVars: {
                // https://ant.design/docs/react/customize-theme-cn 定制主题
                "@primary-color": "#ae1e03",
              },
              javascriptEnabled: true,
            },
          },
        },
      },
    ],
  };
};
