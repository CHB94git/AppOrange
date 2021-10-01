<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" temporary dark>
      <v-layout mt-4 column align-center>
        <v-flex>
          <v-avatar>
            <v-icon class="material-icons" dark>account_circle</v-icon>
          </v-avatar>
        </v-flex>

        <v-flex>
          <p class="white--text mt-3 headline">Name user</p>
        </v-flex>

        <v-divider color="white"></v-divider>

        <v-list>
          <v-list-item block v-for="item in items" :key="item.title" link>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content block>
              <router-link :to="item.link" class="route">
                <v-list-item-title class="white--text">{{
                  item.title
                }}</v-list-item-title>
              </router-link>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-layout>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block color="orange accent-2"> {{ logOut }} </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar dense app color="orange accent-2" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title> {{ titleApp }} </v-app-bar-title>
      </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
    <AppFooter></AppFooter>
  </v-app>
</template>

<script>
import AppFooter from "./components/AppFooter.vue";
//import Header from './components/AppHeader.vue';
//import MyProducts from './views/admin/MyListProducts.vue';

export default {
  name: "App",

  components: {
    AppFooter,
    //MyProducts,
    //Header,
  },

  data: () => ({
    drawer: false,
    titleApp: "OrangeApp",
    logOut: "LOGOUT",
    items: [
      { title: "Home", icon: "mdi-home", link: "/" },
      { title: "Login", icon: "mdi-login", link: "/login" },
      {
        title: "Dashboard",
        icon: "mdi-view-dashboard",
        link: "/admin/dashboard",
      },
      {
        title: "Productos",
        icon: "mdi-clipboard-list",
        link: "/admin/myproducts",
      },
      {
        title: "Producto prueba",
        icon: "mdi-briefcase-eye",
        link: "/user/listproducts",
      },
      { title: "About", icon: "mdi-forum", link: "/about" },
    ],
  }),
};
</script>


<style scope>
.route {
  text-decoration: none;
}
</style>