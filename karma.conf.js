const webpackConfig = require('./webpack.config.js');

module.exports = (config) => {
  config.set({
    browsers: ['Chrome'],
    singleRun: true,
    frameworks: ['mocha'],
    files: ['app/tests/**/*.test.jsx'],
    preprocessors: {
      'app/tests/**/*.test.jsx': ['webpack', 'sourcemap'],
    },
    reporters: ['mocha', 'notification'],
    client: {
      mocha: {
        timeout: '5000',
      },
    },
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true,
    },
  });
};