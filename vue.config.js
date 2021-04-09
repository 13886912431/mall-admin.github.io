module.exports = {
    css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true
            }
        }
    },
    devServer: {
        open: true
    },
    configureWebpack: {
        externals: {
            echarts: "echarts",
            VeIndex: "VeIndex"
        }
    },
    productionSourceMap: !(process.env.VUE_APP_ENV === "prod"),
    outputDir: "docs",
    publicPath: process.env.VUE_APP_ENV === "prod" ? "https://13886912431.github.io/mall-admin" : "/"
};
