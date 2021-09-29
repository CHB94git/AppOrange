<template>
  <v-container fluid>
    <v-data-table
      :headers="headers"
      :items="products"
      sort-by="stock"
      class="elevation-8 rounded-lg"
    >
      <template v-slot:top>
        <v-toolbar flat class="rounded-lg" md-4>
          <v-toolbar-title>Mis Productos</v-toolbar-title>

          <v-divider class="mx-3" inset vertical></v-divider>

          <v-spacer></v-spacer>
          
          <v-dialog v-model="dialog" max-width="600px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="green accent-4" dark class="mb-2 elevation-5" v-bind="attrs" v-on="on">
                Nuevo producto
              </v-btn>
            </template>

            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="editedItem.name"
                        label="Nombre del producto"
                      ></v-text-field>
                    </v-col>

                    <v-col class="d-flex" cols="12" sm="6">
                      <v-select
                        v-model="editedItem.unit"
                        :items="units"
                        label="Unidad de medida"
                      ></v-select>
                    </v-col>

                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="editedItem.price"
                        label="Precio"
                        type="number"
                        prefix="$"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="editedItem.stock"
                        label="Stock"
                        type="number"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12">
                      <v-file-input
                        accept="image/*"
                        flat
                        v-model="editedItem.image"
                        label="Imagen del producto"
                      ></v-file-input>
                    </v-col>

                    <v-col cols="12">
                      <v-textarea
                        v-model="editedItem.desc"
                        counter
                        label="Descripción"
                        :rules="rules"
                        rows="5"
                      ></v-textarea>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="red" text @click="close"> Cancelar </v-btn>
                <v-btn color="green" text @click="save"> Guardar </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5"
                >¿Está seguro/a de eliminar el producto?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="red" text @click="closeDelete"
                  >Cancelar</v-btn
                >
                <v-btn color="green" text @click="deleteItemConfirm"
                  >Aceptar</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>

      <template v-slot:item.actions="{ item }">
        <v-icon color="orange" class="mr-2" @click="editItem(item)">
          mdi-pencil
        </v-icon>
        <v-icon color="red" @click="deleteItem(item)">
          mdi-delete
        </v-icon>
      </template>

      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize"> Reset </v-btn>
      </template>
    </v-data-table>
  </v-container>
</template>


<script>
export default {
  data: () => ({
    rules: [(v) => v.length <= 250 || "Max 250 carácteres"],
    units: ["Libra", "Kilo", "Arroba", "Bulto", "Canasta", "Carga"],
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "Nombre del producto",
        align: "start",
        value: "name",
      },
      { text: "Unidad de medida", value: "unit" },
      { text: "Precio", value: "price" },
      { text: "Imagen", value: "image" },
      { text: "Stock", value: "stock" },
      { text: "Descripción", value: "desc" },
      { text: "Acciones", value: "actions", sortable: false },
    ],
    products: [],
    editedIndex: -1,

    editedItem: {
      name: "",
      unit: "",
      price: "",
      image: "",
      stock: "",
      desc: "",
    },
    defaultItem: {
      name: "",
      unit: "",
      price: "",
      image: "",
      stock: "",
      desc: "",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Crear producto" : "Editar producto";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.products = [
        {
          name: "Arroz",
          unit: "Arroba",
          price: 25000,
          image: '',
          stock: 24,
          desc: "Producto económico con alto valor nutricional",
        },
        {
          name: "Lentejas",
          unit: "Libra",
          price: 2500,
          image: "",
          stock: 30,
          desc: "Producto reciente y fresco",
        },
        {
          name: "Frijoles",
          unit: "Kilo",
          price: 4700,
          image: "",
          stock: 15,
          desc: "Producto disponible por kg",
        },
        {
          name: "Papa",
          unit: "Bulto",
          price: 45000,
          image: "",
          stock: 250,
          desc: "Producto originario de las tierras boyacenses",
        },
        {
          name: "Maíz",
          unit: "Carga",
          price: 130000,
          image: "",
          stock: 5,
          desc: "Producto multiuso",
        },
        {
          name: "Naranja",
          unit: "Bulto",
          price: 60000,
          image: "",
          stock: 10,
          desc: "Producto fresco proveniente de la sabana de Bogotá",
        },
        {
          name: "Fresa",
          unit: "Libra",
          price: 3000,
          image: "",
          stock: 85,
          desc: "Producto empaquetado por bolsas",
        },
        {
          name: "Limón",
          unit: "Carga",
          price: 60400,
          image: "",
          stock: 78,
          desc: "Producto importado de Ecuador",
        },
      ];
    },

    editItem(item) {
      this.editedIndex = this.products.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.products.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.products.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.products[this.editedIndex], this.editedItem);
      } else {
        this.products.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>