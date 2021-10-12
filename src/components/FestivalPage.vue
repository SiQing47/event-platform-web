<template>
  <v-container>
    <v-row>
      <v-col sm="12"
             class="d-flex justify-space-around"
      >
        <v-img
          :src="require('../assets/festival_big3.png')"
          max-height="150"
          class="white--text align-end"
        ></v-img>
      </v-col>
      <v-col sm="12"
             class="d-flex justify-space-around">
        <v-expansion-panels
          max-width="1050">
          <v-expansion-panel>
            <v-expansion-panel-header
              v-slot="{ open } "
              color="cyan darken-2"
              class="white--text"
            >
              <v-row>
                <v-col cols="12" class="text-center">
                  <h3 v-if="!open">
                    搜尋
                    <v-icon color="white">add_circle_outline</v-icon>
                  </h3>
                  <h3 v-else>
                    關閉
                    <v-icon color="white">cancel</v-icon>
                  </h3>
                </v-col>
                <v-col
                  cols="12"
                >
                  <v-fade-transition leave-absolute>
                    <v-row
                      no-gutters
                      style="width: 100%"
                      v-if="!open"
                    >
                      <v-col cols="3">
                        關鍵字: {{ form.keyword }}
                      </v-col>
                      <v-col cols="5">
                        活動日期範圍:
                        {{ form.start }}{{ form.end && ' ~ ' }}{{ form.end }}
                      </v-col>
                      <v-col cols="4">
                        地點: {{ form.location || '' }}
                      </v-col>
                    </v-row>
                  </v-fade-transition>
                </v-col>
              </v-row>
            </v-expansion-panel-header>
            <v-expansion-panel-content
              color="grey lighten-3"
            >
              <v-row
                justify="space-around"
              >
                <v-col cols="4" align-self="center">
                  <h4>活動關鍵字</h4>
                </v-col>
                <v-col cols="8">
                  <v-text-field
                    v-model="form.keyword"
                    label="活動關鍵字"
                  ></v-text-field>
                </v-col>
                <v-col cols="4" align-self="center">
                  <h4>活動日期範圍</h4>
                </v-col>
                <v-col cols="4">
                  <v-menu
                    ref="startMenu"
                    :close-on-content-click="false"
                    :return-value.sync="form.start"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="form.start"
                        label="開始日期"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        clearable
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="date"
                      no-title
                      scrollable
                    >
                      <v-spacer></v-spacer>
                      <v-btn
                        text
                        color="grey"
                        @click="$refs.startMenu.isActive = false"
                      >
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.startMenu.save(date)"
                      >
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-col>
                <v-col cols="4">
                  <v-menu
                    ref="endMenu"
                    :close-on-content-click="false"
                    :return-value.sync="form.end"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="form.end"
                        label="結束日期"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        clearable
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="date"
                      no-title
                      scrollable
                      locale="zh-cn"
                    >
                      <v-spacer></v-spacer>
                      <v-btn
                        text
                        color="grey"
                        @click="$refs.endMenu.isActive = false"
                      >
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.endMenu.save(date)"
                      >
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-col>
                <v-col cols="2" align-self="center">
                  <h4>地區</h4>
                </v-col>
                <v-col cols="10">
                  {{ form.location }}
                  <v-row>
                    <v-col xl="1" md="2" sm="3" xs="4"
                           v-for="item in locations"
                           v-bind:key="item">
                      <v-checkbox
                        class="mt-0"
                        v-model="form.location"
                        :label="item"
                        :value="item"
                      />
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="12">
                  <v-btn
                    color="cyan darken-2"
                    dark
                  >
                    搜尋
                  </v-btn>
                  <v-btn
                    color="grey"
                    dark
                  >
                    清除
                  </v-btn>
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
      <v-col sm="12"
             v-for="item in festivalList"
             :key="item.actId"
      >
        <router-link :to="{name:'FestivalDetail', query:{actId:item.actId}}">
          <Festival :festival="item"></Festival>
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Festival from './Festival';
import { getFestival } from '../api/api';

export default {
  name: 'FestivalPage',
  components: { Festival },
  data: () => ({
    date: null,
    form: {
      keyword: null,
      start: null,
      end: null,
      location: [],
    },
    locations: ['臺北市', '基隆市', '新北市', '宜蘭縣', '桃園市', '新竹市', '新竹縣', '苗栗縣', '臺中市', '彰化縣', '南投縣', '雲林縣', '嘉義縣', '嘉義市', '臺南市', '高雄市', '屏東縣', '澎湖縣', '花蓮縣', '台東縣', '金門縣', '連江縣'],
    festivalList: [],
  }),
  methods: {
    getFestivalData() {
      getFestival()
        .then((res) => {
          this.festivalList = res.data;
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.log(err);
        });
    },
  },
  created() {
    this.getFestivalData();
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
