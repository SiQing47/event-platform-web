<template>
  <v-card
    class="mx-auto text-left"
    max-width="400"
    :href="topic.webSales && topic.sourceWebPromote"
    target="_blank"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      :src="topic.imageUrl"
    />
    <v-card-title>{{ topic.title }}</v-card-title>
    <v-card-text>
      <div>
        <v-icon>event</v-icon>
        {{ topic.startDate }}
        <div
          class="content"
          v-if="topic.startDate !== topic.endDate">
          ~{{ topic.endDate }}
        </div>
      </div>
      <div>
        <v-icon>location_on</v-icon>
          {{ topic.showInfo[0].location !== ''
            ? topic.showInfo[0].location
            : topic.showInfo[0].locationName }}
      </div>
      <div class="text-right">
        <v-chip
          v-if="topic.showInfo[0].onSales ==='N'"
          class="ma-2"
          color="green"
          text-color="white"
          small
        >
          免費
        </v-chip>
        <v-chip
          v-else
          class="ma-2"
          color="orange"
          text-color="white"
          small
        >
          付費
        </v-chip>
        <v-chip
          class="ma-2"
          color="grey"
          text-color="white"
          small
        >
          {{ getTopicCategory(topic.category) }}
        </v-chip>
      </div>

    </v-card-text>

  </v-card>
</template>

<script>
export default {
  name: 'Topic',
  props: ['topic'],
  methods: {
    getTopicCategory(category) {
      const categoryEnums = {
        1: '音樂',
        2: '戲劇',
        3: '舞蹈',
        4: '親子',
        5: '獨立音樂',
        6: '展覽',
        7: '講座',
        8: '電影',
        11: '綜藝',
        13: '競賽',
        14: '徵選',
        15: '其他',
        17: '演唱會',
        19: '研習課程',
      };
      return categoryEnums[category];
    },
  },
};
</script>

<style scoped>
.content {
  display: contents;
}
</style>
