<template>
  <v-container fluid>
    <v-row dense>
      <v-col v-for="card in cards" :key="card.title">
        <v-card class="mx-auto my-2" max-width="400">
          <v-img class="white--text align-end" height="240px" :src="card.src">
            <v-card-title v-text="card.title"></v-card-title>
          </v-img>

          <v-card-text class="text--primary">
            <div>
              <strong>{{ desc }}</strong>
            </div>
            <v-divider></v-divider>
            <div v-text="card.description"></div>
            <div><strong>Precio: </strong> $ {{ card.price }}</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange" outlined @click="dialog = true" text class="elevation-3">
              <v-icon>mdi-eye</v-icon> Ver más...
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    
      <v-dialog v-model="dialog" persistent max-width="400px">
        
        <v-card :loading="loading" class="mx-auto" max-width="100%">
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img
            height="250"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          ></v-img>

          <v-card-title>Cafe Badilico</v-card-title>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>

              <div class="grey--text ms-4">4.5 (413)</div>
            </v-row>

            <div class="my-4 text-subtitle-1">$ • Italian, Cafe</div>

            <div>
              Small plates, salads & sandwiches - an intimate setting with 12
              indoor seats plus patio seating.
            </div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-title>Tonight's availability</v-card-title>

          <v-card-text>
            <v-chip-group
              v-model="selection"
              active-class="green accent-4 white--text"
              column
            >
              <v-chip>5:30PM</v-chip>

              <v-chip>7:30PM</v-chip>

              <v-chip>8:00PM</v-chip>

              <v-chip>9:00PM</v-chip>
            </v-chip-group>
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange accent-2" text @click="reserve">
              <v-icon>mdi-cart</v-icon>
              Reserve
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn color="red" text @click="dialog = false">
              Close
            </v-btn>
          </v-card-actions>
        </v-card>

      </v-dialog>
    
    <div class="text-center my-2">
      <v-pagination v-model="page" :length="5"></v-pagination>
    </div>
  </v-container>
</template>


<script>
export default {
  data: () => ({
    dialog: false,
    loading: false,
    selection: 1,
    desc: "Descripción",
    page: 1,
    cards: [
      {
        title: "Arroz",
        src: "https://images.pexels.com/photos/4110255/pexels-photo-4110255.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        description: "Producto económico con alto valor nutricional",
        price: 25000,
      },
      {
        title: "Lentejas",
        src: "https://images.unsplash.com/photo-1593536673055-14892cdffac7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80",
        description: "Producto reciente y fresco",
        price: 2500,
      },
      {
        title: "Frijoles",
        src: "https://images.unsplash.com/photo-1506620780696-e5cb6c54524e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
        description: "Producto disponible por kg",
        price: 4700,
      },
      {
        title: "Papa",
        src: "https://images.unsplash.com/photo-1603048719539-9ecb4aa395e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=884&q=80",
        description: "Producto originario de las tierras boyacenses",
        price: 45000,
      },
      {
        title: "Maíz",
        src: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
        description: "Producto multiuso",
        price: 130000,
      },
      {
        title: "Naranja",
        src: "https://images.unsplash.com/photo-1549888834-3ec93abae044?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
        description: "Producto fresco proveniente de la sabana de Bogotá",
        price: 60000,
      },
      {
        title: "Fresa",
        src: "https://images.unsplash.com/photo-1543528176-61b239494933?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80",
        description: "Producto empaquetado por bolsas",
        price: 3000,
      },
      {
        title: "Limón",
        src: "https://images.unsplash.com/photo-1587496679742-bad502958fbf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
        description: "Producto importado de Ecuador",
        price: 60400,
      },
    ],
  }),
  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>
