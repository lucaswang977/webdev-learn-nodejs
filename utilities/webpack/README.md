# Webpack Document Notes

A static module bundler for modern JavaScript applications.

## Concepts

- Entry
  - An entry point indicates which module webpack should use to begin building out its internal dependency graph.
  - By default its value is ./src/index.js.
  ```js
  module.exports = {
    entry: "./path/to/my/entry/file.js",
  };
  ```
- Output

  - The output property tells webpack where to emit the bundles it creates and how to name these files.
  - It defaults to ./dist/main.js for the main output file and to the ./dist folder for any other generated file.

  ```js
  const path = require("path");

  module.exports = {
    entry: "./path/to/my/entry/file.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "my-first-webpack.bundle.js",
    },
  };
  ```

- Loaders

  - Out of the box, webpack only understands JavaScript and JSON files. Loaders allow webpack to process other types of files and convert them into valid modules that can be consumed by your application and added to the dependency graph.
  - At a high level, loaders have two properties in your webpack configuration:
    - The "test" property identifies which file or files should be transformed.
    - The "use" property indicates which loader should be used to do the transforming.

  ```js
  const path = require("path");

  module.exports = {
    output: {
      filename: "my-first-webpack.bundle.js",
    },
    module: {
      rules: [{ test: /\.txt$/, use: "raw-loader" }],
    },
  };
  ```

- Plugins

  - Plugins can be leveraged to perform a wider range of tasks like bundle optimization, asset management and injection of environment variables.

  ```js
  const HtmlWebpackPlugin = require("html-webpack-plugin");
  const webpack = require("webpack"); //to access built-in plugins

  module.exports = {
    module: {
      rules: [{ test: /\.txt$/, use: "raw-loader" }],
    },
    plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
  };
  ```

- Mode

  - By setting the mode parameter to either development, production or none, you can enable webpack's built-in optimizations that correspond to each environment.
  - The default value is production.

  ```js
  module.exports = {
    mode: "production",
  };
  ```
