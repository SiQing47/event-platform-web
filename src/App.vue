<template>
  <v-app>
    <v-app-bar app color="cyan darken-2">
      <v-container class="py-0 fill-height">
        <v-app-bar-title class="title-color">
          藝文資訊整合平台
        </v-app-bar-title>
        <v-spacer></v-spacer>
        <v-responsive max-width="260">
          <v-text-field
            label="搜尋"
            solo
            dense
            flat
            hide-details
            rounded
            append-outer-icon="search"
          >
          </v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>
    <!-- 根据应用组件来调整你的内容 -->
    <v-main>
      <!-- 给应用提供合适的间距 -->
      <v-container>
        <v-row
          align="center"
          justify="space-around"
        >
          <v-col
            id="menus"
            v-for="item in menus"
            :key="item.key"
            :name="item.value"
          >
            <v-btn
              text
              block
              x-large
              @click="$router.push(item.routerName)"
              v-ripple="{ class: 'green--text' }"
            >
              {{ item.title }}
            </v-btn>
          </v-col>
        </v-row>
        <!-- 如果使用 vue-router -->
        <div id="app">
          <router-view/>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      menus: [
        { value: 1, routerName: 'home', title: '首頁' },
        { value: 2, routerName: 'search', title: '找活動' },
        { value: 3, routerName: 'topic', title: '主題推薦' },
        { value: 4, routerName: 'festival', title: '節慶活動' },
        { value: 5, routerName: 'other', title: '相關網站' },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.title-color {
  color: white;
}

#menus .v-btn::before {
  background-color: green;
}
</style>
