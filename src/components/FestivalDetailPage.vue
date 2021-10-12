<template>
  <v-container>
    <div>
      <v-row class="text-left">
        <v-col cols="12">
          <h2>{{ actData.actName }}</h2>
        </v-col>
        <v-col xs="12" sm="6" md="5"
               class="col-background"
        >
          <v-img
            :src='actData.imageUrl'
          />
        </v-col>
        <v-col xs="12" sm="6" md="7"
               class="col-background">
          <ul class="remove-dot">
            <li v-if="actData.cycle">
              <h3 class="orange--text">{{ actData.cycle }}</h3>
            </li>
            <li>
              <p>
                <v-icon>event</v-icon>
                活動時間
                {{ getDateFormat(actData.startTime) }}
                <span
                  class="content"
                  v-if="actData.startTime !== actData.endTime">
                  ~ {{ getDateFormat(actData.endTime) }}
                </span>
              </p>
            </li>
            <li>
              <p>
                <v-icon>location_on</v-icon>
                活動地點
                {{ actData.cityName }}
              </p>
            </li>
            <li>
              <p>
                <v-icon>local_offer</v-icon>
                主軸
                {{ getGrade() }}
              </p>
            </li>
            <li>
              <p>
                <v-icon>tag</v-icon>
                活動性質
                {{ actData.levelName }}
              </p>
            </li>
            <li>
              <p>
                <v-icon>home_work</v-icon>
                主辦單位
                {{ actData.org }}
              </p>
            </li>
            <li>
              <v-btn
                v-if="actData.website"
                color="cyan"
                dark
                :href="actData.website"
                target="_blank"
              > 活動網址
              </v-btn>
            </li>
          </ul>
        </v-col>
        <v-col cols="12">
          <h3>活動詳情</h3>
          <div>
            <p>{{ actData.description }}</p>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import { getFestival } from '../api/api';

export default {
  name: 'FestivalDetailPage',
  data: () => ({
    actId: 0,
    actData: {},
    festivalList: [],
  }),
  methods: {
    getAllData() {
      getFestival()
        .then((res) => {
          this.festivalList = res.data;
          this.getActData();
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.log(err);
        });
    },
    getActData() {
      const actId = this.$route.query.actId;
      let selectedAct;
      this.festivalList.forEach((obj) => {
        if (obj.actId === parseInt(actId, 10)) {
          selectedAct = obj;
        }
      });
      this.actData = selectedAct;
      this.actData.imageUrl = `https://cloud.culture.tw/${this.actData.imageUrl}`;
    },
    getDateFormat(datetime) {
      const newDate = new Date(Date.parse(datetime));
      return `${newDate.getFullYear()}/${newDate.getMonth() + 1}/${newDate.getDate()}`;
    },
    getGrade() {
      const { grade1, grade2, grade3, grade4, grade5, grade6 } = this.actData;
      const gradeList = [grade1, grade2, grade3, grade4, grade5, grade6];
      let gradeResult = '';
      gradeList.forEach((grade) => {
        if (grade) {
          gradeResult += (`${grade} `);
        }
      });
      return gradeResult;
    },
  },
  created() {
    this.getAllData();
  },
};
</script>

<style scoped>
.remove-dot {
  list-style-type: none;
}

.col-background {
  background-color: #f5f5f5;
}
</style>
