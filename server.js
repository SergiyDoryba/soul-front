const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));
app.set('port', process.env.PORT || 8080);

const server = app.listen(app.get('port'), function () {
  console.log('listening on port ', server.address().port);
});


// const express = require('express');
// const webpack = require('webpack');
// const webpackDevMiddleware = require('webpack-dev-middleware');
//
// const app = express();
// const config = require('./webpack.config.js');
// const compiler = webpack(config);
//
// // Tell express to use the webpack-dev-middleware and use the webpack.config.js
// // configuration file as a base.
// app.use(webpackDevMiddleware(compiler, {
//     publicPath: config.output.publicPath
// }));
//
// // Serve the files on port 3000.
// app.listen(3000, function () {
//     console.log('Example app listening on port 3000!\n');
// });