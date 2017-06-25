const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');

const config = require('../../webpack.config.js');

const host = 'localhost';
const port = 3005;

/* eslint-disable no-console */
new webpackDevServer(webpack(config), {
  hot: true,
  publicPath: config.output.publicPath,
  stats: {
    color: true
  }
}).listen(port, host, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Listening at host: ${host} port: ${port}`);
});
