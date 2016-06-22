const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const ProgressPlugin = require('webpack/lib/ProgressPlugin')
const config = require('./webpack.config')
const log = require('single-line-log').stdout
const keypress = require('keypress')
const colog = require('colog')

const webpackCompiler = webpack(config)
const devServerConfig = {
  publicPath: config.output.publicPath,
  hot: true,
  // Set this as true if you want to access dev server from arbitrary url.
  // This is handy if you are using a html5 router.
  historyApiFallback: true,
  // suppress boring information
  noInfo: true,
  colors: true,
  stats: {
    colors: true
  },
  headers: {
    'Access-Control-Allow-Origin': '*'
  },
}
const { port, host } = config.devServer
const now = () => (new Date()).toLocaleTimeString()

webpackCompiler.apply(new ProgressPlugin((percentage, msg) => {
  log(colog.colorCyan(Math.round(percentage * 100) + "%: ") + msg)
  if (percentage === 1) {
    // erase percentage
    log("")
    colog.question(`[${now()}] Listening at http://${host}:${port}/`)
  }
}))

const devServer = new WebpackDevServer(webpackCompiler, devServerConfig)

devServer.listen(port, host, function (err, result) {
  if (err) {
    return colog.error(err)
  }
})

// make process.stdin begin emitting "keypress" events
keypress(process.stdin)

// happens when you press Ctrl+C
process.on('SIGINT', function () {
  colog.warning(`[${now()}] Exiting on SIGINT`)
  devServer.close()
  process.exit()
})

// usually called with kill
process.on('SIGTERM', function () {
  // exit cleanly
  colog.warning(`[${now()}] Exiting on SIGTERM`)
  devServer.close()
  process.exit(0)
})

// listen for the "keypress" event
process.stdin.on('keypress', function (ch, key) {
  if (key.name == 'enter') {
    process.stdin.pause()
    colog.warning(`[${now()}] Exiting on ENTER`)
    devServer.close()
    process.exit(0)
  }
})

process.stdin.resume()
