import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import HomePage from '@/components/HomePage';
import TopicPage from '@/components/TopicPage';
import FestivalPage from '../components/FestivalPage';
import FestivalDetailPage from '../components/FestivalDetailPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/home',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/topic',
      name: 'topic',
      component: TopicPage,
    },
    {
      path: '/festival',
      name: 'festival',
      component: FestivalPage,
    },
    {
      path: '/festivalDetail',
      name: 'FestivalDetail',
      component: FestivalDetailPage,
    },
  ],
});
