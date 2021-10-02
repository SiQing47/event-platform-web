<template>
  <v-card
    class="mx-auto text-left"
    target="_blank"
  >
    <v-row class="pa-1">
      <v-col cols="3" align-self="center">
        <v-img
          class="white--text align-end"
          :src='getImageUrl(festival.imageUrl)'
          max-height="200"
        />
      </v-col>
      <v-col cols="9">
        <v-card-title>
          <v-chip v-if="festival.levelName==='國際級'"
                  label
                  color="orange darken-3"
                  text-color="white"
          >
            {{ festival.levelName }}
          </v-chip>
          <v-chip v-else
                  label
                  color="blue darken-3"
                  text-color="white"
          >
            {{ festival.levelName }}
          </v-chip>
          <span class="pl-2">{{ festival.actName }}</span>

        </v-card-title>
        <v-card-text class="pb-0">
          <h3
            v-if="festival.cycle"
            class="red--text"
          >
            {{ festival.cycle }}
          </h3>
          <div class="pa-1">
            <span>
              <v-icon>event</v-icon>
              {{ getDateFormat(festival.startTime) }}
              <span
                class="content"
                v-if="festival.startTime !== festival.endTime">
                ~ {{ getDateFormat(festival.endTime) }}
              </span>
            </span>
              <span>
              <v-icon>location_on</v-icon>
              {{ festival.cityName }}
            </span>
          </div>
          <div class="festival-desc">
            <p class="ellipsis">{{ festival.description }}</p>
          </div>
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>

export default {
  name: 'Festival',
  props: ['festival'],
  methods: {
    getImageUrl(imageUrl) {
      return `https://cloud.culture.tw/${imageUrl}`;
    },
    getDateFormat(datetime) {
      const newDate = new Date(Date.parse(datetime));
      return `${newDate.getFullYear()}/${newDate.getMonth() + 1}/${newDate.getDate()}`;
    },
  },
};
</script>

<style scoped>
.content {
  display: contents;
}

.festival-desc {
  font-size: medium;
}

.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  white-space: normal;
}
</style>
