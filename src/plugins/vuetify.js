// src/plugins/vuetify.js

import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css'; // 确保您正在使用 css-l

Vue.use(Vuetify);

const opts = {
  icons: {
    iconfont: 'md',
  },
};

export default new Vuetify(opts);
