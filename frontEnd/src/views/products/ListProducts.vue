<template>
  <v-container fluid>
    <v-row dense>
      <v-col v-for="product in displayedProducts" :key="product._id">
        <v-card class="mx-auto my-2" max-width="400">
          <v-img
            class="white--text align-end"
            height="240px"
            :src="product.src"
          >
            <v-card-title v-text="product.name"></v-card-title>
          </v-img>

          <v-card-text class="text--primary">
            <div>
              <strong>{{ descrip }}</strong>
            </div>
            <v-divider></v-divider>
            <div v-text="product.description"></div>
            <div><strong>Precio: </strong> $ {{ product.price }}</div>
          </v-card-text>

          <v-card-actions>
            <v-btn
              color="orange"
              outlined
              @click="(dialog = true), getOneProduct()"
              text
              class="elevation-3"
            >
              <v-icon>mdi-eye</v-icon> Ver más...
            </v-btn>
          </v-card-actions>
        </v-card>
        
      </v-col>
    </v-row>

    <v-dialog v-model="dialog"  max-width="400px">
      <v-card :loading="loading" class="mx-auto" max-width="96%">
        <template slot="progress">
          <v-progress-linear
            color="green accent-4"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-img
          height="250"
          :src="product.src"
        ></v-img>

        <v-card-title>{{product.name}}</v-card-title>

        <v-card-text>
          <div>
            {{product.stock}}
          </div>
          <div>
            {{product.price}}
          </div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-title>{{product.description}}</v-card-title>


        <v-card-actions>
          <v-btn color="orange accent-2" text @click="reserve">
            <v-icon>mdi-cart</v-icon>
            Reserve
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="red" text @click="dialog = false"> Close </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <div class="text-center my-1">
      <v-container>
        <v-row justify="center">
          <v-col cols="6">
            <v-container class="max-width">
              <v-pagination
                v-model="page"
                :length="length"
                prev-icon="mdi-menu-left"
                next-icon="mdi-menu-right"
              >
              </v-pagination>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-container>
</template>


<script>
import { getAllProducts, getById } from "../../controllers/ProductsController";

export default {
  data() {
    return {
      products: [],
      dialog: false,
      loading: false,
      selection: 1,
      descrip: "Descripción",
      page: 1,
      length: 2,

      product: {
      _id: "",
      codeProduct: "",
      name: "",
      unit: "",
      price: "",
      src: "",
      stock: "",
      category: "",
      description: "",
    },
    };
  },
  created() {
    getAllProducts()
      .then((response) => {
        this.products = response.data;
      })
      .catch((err) => console.error(err));
  },
  methods: {
    reserve() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
    },

    getOneProduct() {
      const id = this.$route.params._id;
      getById(id)
        .then((res) => {
          console.log(res);
          this.product = res.data;
        })
        .catch((err) => console.error(err));
    },
  },
  computed: {
    displayedProducts() {
      const { page, length, products } = this;
      const number = Math.ceil(products.length / length); // Numero de elementos a mostrar por página
      return this.products.slice((page - 1) * number, page * number);
    },
  },
};
</script>
