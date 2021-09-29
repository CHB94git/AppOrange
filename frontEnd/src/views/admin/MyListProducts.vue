<template>
  <v-container fluid>
    <v-row dense>
      <v-col v-for="card in cards" :key="card.title">
        <v-card class="mx-auto my-2" max-width="400">
          <v-img class="white--text align-end" height="240px" :src="card.src">
            <v-card-title v-text="card.title"></v-card-title>
          </v-img>

          <v-card-text class="text--primary">
            <div><strong>Descripción del producto</strong></div>
            <v-divider></v-divider>
            <div v-text="card.description"></div>
            <div><strong>Precio: </strong> $ {{ card.price }}</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange" outlined text> Editar </v-btn>

            <v-btn color="red" outlined text> Eliminar </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <div class="text-center my-2">
      <v-pagination v-model="page" :length="3"></v-pagination>
    </div>
  </v-container>
</template>


<script>
export default {
  data: () => ({
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
};
</script>
