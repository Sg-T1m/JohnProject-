const path = require(`path`);
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { default: test } = require("node:test");
module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: `development`,
  entry: {
    main: [`@babel/polyfill`, "./index.js"],
    service: [`@babel/polyfill`, "./test.js"]
  },
  output: {
    filename: `bundle[contenthash].js`,
    path: path.resolve(__dirname, `dist`),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, `src`, `maket.html`,),
      chunks: ['main']

    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, `src`, `blog.html`,),
      filename: 'blog.html',
      chunks: ['service'],
    }),
  ],
  devServer: {
    port: 4200
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [`style-loader`, `css-loader`]
      },
      {
        test: /\.html$/i,
        loader: `html-loader`,
      },
      {
        test: /\.scss$/,
        use: [`css-loader`, `sass-loader`]
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              '@babel/preset-env',
              "@babel/preset-typescript"
            ]
          }
        }
      }

    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
};
