// vue.config.js
console.log('zzzzzzzzzzzzzz', process.env.NODE_ENV)
console.log('zzzzzzzzzzzzzz', process.env.VUE_APP_API_BASE)
module.exports = {
  // 选项...
  devServer: {
    proxy: {
      '/api': {
        target: process.env.VUE_APP_API_BASE,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '' // 通过pathRewrite重写地址，将前缀/api转为/
        }
      }
    }
  }
}
