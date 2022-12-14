const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  // 1
  // Use the src/index.js file as entry point to bundle it.
  // If the src/index.js file imports other JS files,
  // bundle them as well
  entry: ['./src/scripts/index.js', './src/scripts/animal.js', './src/scripts/createAcount.js'],// path.resolve(__dirname, './src/index.js'),
  // 2
  // The bundles source code files shall result in a bundle.js file
  // in the /dist folder
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    library: 'MyLibrary'
  },
  // 3
  // The /dist folder will be used to serve our application
  // to the browser
  devServer: {
    static: path.resolve(__dirname, './dist'),
  },
  // 4
  // Add plugins for webpack here
  plugins: [
    new CleanWebpackPlugin,
    new HtmlWebpackPlugin({
      title: "Basic Webpack Setup",
      template: path.resolve(__dirname, './src/index.html'),
    }),
    new HtmlWebpackPlugin({  // Also generate a test.html
      filename: 'about.html',
      template: 'src/html/about.html'
    }),
    new HtmlWebpackPlugin({  // Also generate a test.html
      filename: 'home.html',
      template: 'src/html/home.html'
    }),
    new HtmlWebpackPlugin({  // Also generate a test.html
      filename: 'contents.html',
      template: 'src/html/contents.html'
    }),
    new HtmlWebpackPlugin({  // Also generate a test.html
      filename: 'animal.html',
      template: 'src/html/animal.html'
    }),
    new HtmlWebpackPlugin({  // Also generate a test.html
      filename: 'createAcount.html',
      template: 'src/html/createAcount.html'
    })
  ],
  // 5 
  // Integrate Babel in the build process
  // Define which files to use the loader
  module: {
    // configuration regarding modules
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/, // files to exclude
        use: ['babel-loader']
      },
      // CSS and SASS
      {
        test: /\.css$/i,  // load files that end with scss and css
        exclude: /node_modules/, // files to exclude
        use: [
          'style-loader',
          'css-loader'
        ],
      }
    ]
  },
  resolve: {
    // options for resolving module requests
    extensions: ['*', '.js']  // files to load
  }
};
