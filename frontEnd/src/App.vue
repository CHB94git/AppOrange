<template>
  <v-app>
    
      <navigation-drawer/>
  
    <v-main>
      <router-view></router-view>
    </v-main>
    <app-footer/>
  </v-app>
</template>

<script>
import AppFooter from './components/AppFooter.vue';
import NavigationDrawer from './components/NavigationDrawer.vue';

export default {
  name: "App",

  components: {
    AppFooter,
    NavigationDrawer,
  },
};
</script>

