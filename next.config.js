const path = require("path");

module.exports = {
    images: {
        domains: ['http://localhost.zipbak.site:3000','http://zipbak.site'],
    },
    webpack: (config, options) => {
        config.module.rules.push(
            {
                test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                loader: 'url-loader'
            }
        )
        return config
    },
    images: {
        path: path.resolve(__dirname, 'public','assets','images'),
    },
};
