<template>
  <div id="app">
    <v-container>
      <v-row>
        <v-col sm="8">
          <v-carousel
            cycle
            height="400"
            hide-delimiter-background
            show-arrows-on-hover
          >
            <v-carousel-item
              v-for="(item,i) in carouselItems"
              :key="i"
              :src="item.src"
              :href="item.link"
              target="_blank"
            ></v-carousel-item>
          </v-carousel>
        </v-col>
        <v-col sm="4">
          <router-link to="festival">
            <v-img
              :src="require('../assets/festival.png')"
              max-width="350"
            ></v-img>
          </router-link>
          <router-link to="topic">
            <v-img
              :src="require('../assets/topic.png')"
              max-width="350"
            ></v-img>
          </router-link>
        </v-col>
        <v-col sm="12">
          <h2 class="text-left">熱門活動排行</h2>
          <v-divider class="divider"></v-divider>
        </v-col>
        <v-col
          sm="6"
          v-for="typeItems in eventItems"
          :key="typeItems.type">
          <v-card
            max-width="500"
            class="mx-auto"
            flat
          >
            <v-card-title class="pa-1">
              {{ typeItems.title }}
            </v-card-title>
            <v-list>
              <v-list-item
                v-for="item in typeItems.eventList"
                :key="item.title"
                :href="item.link"
                target="_blank"
              >
                <v-list-item-icon>
                  <v-avatar color="grey" rounded size="36">
                    <span class="white--text text">{{ item.rank }}</span>
                  </v-avatar>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ item.type }} - {{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      carouselItems: [
        {
          src: 'https://cloud.culture.tw/e_new_upload/task/97b68b43-4653-4595-b7a0-a816818be7c5/587794988cfb0e6362426451c88d970dcaeab92fbed83de272e1f84b444a4791faa943baf8f2f2132c22901c1fed15e150e81853796917ad0d43678fd0bd4959/75f5e3277ba0206c65cc73cdaaa781922e4c3c5a.jpg',
          link: 'https://www.arte.gov.tw/pro1_exh_now.asp?KeyID\u003d3087',
        },
        {
          src: 'https://cloud.culture.tw/e_new_upload/cms/image/A0/B0/C0/D20/E144/F948/ec4f1767-21a6-45b0-9c65-1f1151f2de53.jpg',
          link: 'https://reurl.cc/dGleMq',
        },
        {
          src: 'https://cloud.culture.tw/e_new_upload/cms/image/A0/B0/C0/D22/E186/F1/3962a866-f005-400f-89e7-05799e95efb4.jpg',
          link: 'http://jam.jutfoundation.org.tw/exhibition/3101',
        },
        {
          src: 'https://cloud.culture.tw/e_new_upload/cms/image/A0/B0/C0/D24/E155/F250/0a005484-53de-4382-958c-e71b79b9cc78.jpg',
          link: 'https://mipaliwlandart.com',
        },
      ],
      eventItems: [{
        type: 'pay',
        title: '付費',
        eventList: [
          {
            rank: 1,
            type: '展覽',
            title: '再見捌捌陸Zone—臺灣眷村文化園區常設展',
            link: 'http://event.moc.gov.tw/sp.asp?xdurl=ccEvent2016/ccEvent_cp.asp&cuItem=2489717&ctNode=676&mp=1',
          },
          {
            rank: 2,
            type: '展覽',
            title: '從那日出之地-蘭嶼大船拜訪號-Si Mangavang展',
            link: 'https://www.tacp.gov.tw/News/ExhibitionInfo?ID=abd05926-b37c-48ed-a966-4bfa49d1b648',
          },
          { rank: 3, type: '展覽', title: '寺廟神像常設展（二館二樓）', link: 'http://wood.mlc.gov.tw/' },
          {
            rank: 4,
            type: '親子',
            title: '2021宜蘭綺麗觀光園區 ~綺麗好好玩！',
            link: 'https://ticket.com.tw/Application/UTK02/UTK0201_.aspx?PRODUCT_ID=N0NLFCFS',
          },
          { rank: 5, type: '研習課程', title: '魔幻琺瑯/七宝烧體驗課程', link: 'https://www.facebook.com/pg/juhauwanyi/events/' },
        ],
      }, {
        type: 'free',
        title: '免費',
        eventList: [
          {
            rank: 1,
            type: '展覽',
            title: '再見捌捌陸Zone—臺灣眷村文化園區常設展',
            link: 'http://event.moc.gov.tw/sp.asp?xdurl=ccEvent2016/ccEvent_cp.asp&cuItem=2489717&ctNode=676&mp=1',
          },
          {
            rank: 2,
            type: '展覽',
            title: '從那日出之地-蘭嶼大船拜訪號-Si Mangavang展',
            link: 'https://www.tacp.gov.tw/News/ExhibitionInfo?ID=abd05926-b37c-48ed-a966-4bfa49d1b648',
          },
          { rank: 3, type: '展覽', title: '寺廟神像常設展（二館二樓）', link: 'http://wood.mlc.gov.tw/' },
          {
            rank: 4,
            type: '親子',
            title: '2021宜蘭綺麗觀光園區 ~綺麗好好玩！',
            link: 'https://ticket.com.tw/Application/UTK02/UTK0201_.aspx?PRODUCT_ID=N0NLFCFS',
          },
          { rank: 5, type: '研習課程', title: '魔幻琺瑯/七宝烧體驗課程', link: 'https://www.facebook.com/pg/juhauwanyi/events/' },
        ],
      }],
    };
  },
};
</script>

<style scoped>
.divider{
  border-width: initial;
  border-color: #02c5c5;
}
</style>
