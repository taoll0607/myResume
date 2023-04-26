import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
//引入插件
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

//const path = require('path');
import path from "path";
export default defineConfig({
   plugins: [
    vue(),
    //配置插件
    AutoImport({
      resolvers: [ElementPlusResolver()],
      imports:['vue','vue-router']
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  server:{
  	proxy:{
  		'/api':'https://silkroad.csdn.net/api/v2/assemble/list/channel/search_hot_word?new_hot_flag=1&channel_name=pc_hot_word&size=20&platform=pc&imei=10_9796566280-1659510084110-228783&toolbarSearchExt=%7B%22landingWord%22%3A%5B%22box-shadow%22%5D%2C%22queryWord%22%3A%22%22%2C%22tag%22%3A%5B%5D%2C%22title%22%3A%22box-shadow%E8%AF%A6%E8%A7%A3%22%7D'
  	}
  },
  resolve: {
    // 配置路径别名
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});