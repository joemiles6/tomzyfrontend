const path = require("path")
module.exports = {
  lintOnSave: false,

  pluginOptions: {
    apollo: {
      enableMocks: true,
      enableEngine: true
    }
  },
  outputDir: path.resolve(__dirname, "../../backend/dist/public"),
  devServer: {
    proxy: {
      "/graphql": {
        target: "http://localhost:3000"
      }
    }
  }
}

