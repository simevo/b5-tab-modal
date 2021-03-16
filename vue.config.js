module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://django:8000',
        pathRewrite: { '^/api': '' }
      }
    }
  }
}
