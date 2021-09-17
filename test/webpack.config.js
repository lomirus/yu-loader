const path = require("path");

module.exports = {
    mode: "production",
    module: {
        rules: [
            {
                test: /\.ma$/,
                use: path.resolve('../index.js'),
            },
        ],
    },
}