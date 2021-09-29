<template>
  <div>
    <v-app-bar
      color="orange accent-2"
      flat
      dark
    >
      <v-app-bar-nav-icon>
          <v-img
              max-height="100%"
              max-width="110" class="ml-15"
              src="../assets/img/Orange_Logo.png"
          ></v-img>
      </v-app-bar-nav-icon>
      <v-spacer></v-spacer>

      <v-toolbar-title>OrangeApp</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="page in pages"
            :key="page"
            @click="() => {}"
          >
            
            <router-link :to="page.link" class="route"> 
              <v-list-item-title> {{ page.nombre }}</v-list-item-title>
            </router-link>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>


<script>
  export default {
    data: () => ({
      pages:[
      {nombre:"Login", link:'/login-register'},
      {nombre:"Galeria", link:'/'},
      {nombre:"Contactános", link:'/about'},

      ],
      
    }),
      
  }
</script>

<style scope>
.route {
    text-decoration: none;
}
</style>