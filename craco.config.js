const CracoLessPlugin = require("craco-less");
const path = require("path");
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
    webpack: {
      configure: (webpackConfig, { env, paths }) => {
        // paths.appPath='public'
        paths.appBuild = "dist";
        webpackConfig.output = {
          ...webpackConfig.output,
          // ...{
          //   filename: whenDev(() => 'static/js/bundle.js', 'static/js/[name].js'),
          //   chunkFilename: 'static/js/[name].js'
          // },
          path: path.resolve(__dirname, "dist"), // 修改输出文件目录
          publicPath: "/poem/",
        };
        return webpackConfig;
      },
    },
  };
};
