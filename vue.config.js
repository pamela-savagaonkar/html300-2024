<<<<<<< HEAD
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
=======
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/html300-2024/04-Intro_to_Vue/' // Path specific to your Vue project
      : '/'
  };
  
>>>>>>> 60d1931 (Save work before switching branches)
