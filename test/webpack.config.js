const path = require("path");

module.exports = {
    mode: "production",
    module: {
        rules: [
            {
                test: /\.ma(\.js)?$/,
                use: path.resolve('../index.js'),
            },
        ],
    },
}