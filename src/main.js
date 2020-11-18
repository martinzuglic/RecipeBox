import Vue from 'vue'
import VueRouter from "vue-router";
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

import HomePage from "./components/HomePage.vue";
import AddRecipes from "./components/AddRecipes.vue";

Vue.use(Buefy)
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: HomePage
  },
  {
    path: "/addrecipes",
    component: AddRecipes
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
