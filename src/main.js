import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/css/common.css'
// 引入jQuery、bootstrap
import $ from "jquery";
import "bootstrap";
// 引入bootstrap样式
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
// 引入阿里云字体图标css
import './iconfonts/iconfont.css';
import './iconfonts/iconfont.js';
import 'animate.css'
//import 'wow.js/css/libs/animate.css'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
