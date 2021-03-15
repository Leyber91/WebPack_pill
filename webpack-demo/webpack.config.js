const path = require("path");
module.exports = {
    entry: "./src/index.js",
    mode: "development", // on development mode stops minifying
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
        // path resolve takes absolute path of the directory
    }

}