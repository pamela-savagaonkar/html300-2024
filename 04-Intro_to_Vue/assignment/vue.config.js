// vue.config.js
module.exports = {
  publicPath: './', // Use relative paths for serving files
  outputDir: 'dist', // Output directory for build
  assetsDir: 'assets', // Directory for static assets
  devServer: {
    // Server configuration
    host: 'localhost',
    port: 8080,
  },
};
