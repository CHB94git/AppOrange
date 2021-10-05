<template>
  <v-container fluid>
    <v-row dense>
      <v-col v-for="product in products" :key="product.id">
        <v-card class="mx-auto my-2" max-width="400">
          <v-img class="white--text align-end" height="240px" :src="product.src">
            <v-card-title v-text="product.name"></v-card-title>
          </v-img>

          <v-card-text class="text--primary">
            <div>
              <strong>{{ descrip }}</strong>
            </div>
            <v-divider></v-divider>
            <div v-text="product.desc"></div>
            <div><strong>Precio: </strong> $ {{ product.price }}</div>
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
import { getAllProducts } from "../../controllers/ProductsController";

export default {
  data() {
    return{
    products: [],
    dialog: false,
    loading: false,
    selection: 1,
    descrip: "Descripción",
    page: 1,
    };
  },
  created() {
    getAllProducts()
      .then((response) => {
        this.products = response.data
      })
      .catch((err) => console.error(err));
  },
  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
  
};
</script>
