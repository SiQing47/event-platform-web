<template>
  <v-container>
    <h1>{{ title }}</h1>
    <v-row>
      <v-col sm="8">
        <v-img
          :src="require('../assets/topic_img.png')"
        ></v-img>
      </v-col>
      <v-col sm="4">
        <div class="align-center text-left note">
          <h2>{{ note }}</h2>
        </div>
      </v-col>
      <v-col sm="4"
             v-for="item in issue"
             :key="item.UID"
      >
        <Topic :topic="item"></Topic>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Topic from './Topic';
import { getTopic } from '../api/api';


export default {
  name: 'TopicPage',
  components: { Topic },
  data() {
    return {
      title: '',
      note: '',
      issue: [],
    };
  },
  methods: {
    getTopicData() {
      getTopic()
        .then((res) => {
          this.title = res.data.title;
          this.note = res.data.note;
          this.issue = res.data.issue;
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.log(err);
        });
    },
  },
  created() {
    this.getTopicData();
  },
};
</script>

<style scoped>
.note {
  background: antiquewhite;
  padding: inherit;
}
</style>
