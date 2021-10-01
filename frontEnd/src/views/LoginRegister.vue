<template>
  <v-app id="inspire">
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="6" md="8" xs="4">
            <v-card class="elevation-12 rounded-lg">
              <v-img
                width="100%"
                height="150px"
                src="https://images.unsplash.com/photo-1545898073-346e42dc7357?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                >
              </v-img>
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row class="fill-height">
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1
                          class="
                            text-center
                            display-2
                            brown--text
                            text--lighten-1
                          "
                        >
                          Iniciar sesión
                        </h1>

                        <h4 class="text-center mt-4">
                          Ingresa tus credenciales
                        </h4>
                        <v-form>
                          <v-text-field
                            label="Email"
                            name="Email"
                            prepend-icon="email"
                            type="text"
                            color="brown lighten-1"
                          />

                          <v-text-field
                            id="password"
                            label="Contraseña"
                            :type="showPassword ? 'text' : 'password'"
                            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                            @click:append="showPassword = !showPassword"
                            name="password"
                            prepend-icon="lock"
                            color="brown lighten-1"
                          />
                        </v-form>
                      </v-card-text>
                      <div class="text-center mb-2">
                        <v-btn rounded color="brown lighten-1" dark
                          >INGRESAR</v-btn
                        >
                      </div>
                    </v-col>
                    <v-col cols="12" md="4" class="brown lighten-1">
                      <v-card-text class="white--text ">
                        <h1 class="text-center display-1 mt-8"><strong>No tienes una cuenta?</strong></h1>
                        <h5 class="text-center">
                          Ingresa tus datos personales para unirte a nosotros
                        </h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step++, GoToRegister()" class="mb-2"
                          >REGISTRARSE</v-btn
                        >
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>

                <v-window-item :value="2">
                  <v-row class="fill-height">
                    <v-col cols="12" md="4" class="green accent-4">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1 ">
                          <strong>Ya tienes una cuenta?</strong> 
                        </h1>
                        <h5 class="text-center">
                          Ingresa tus credenciales para iniciar sesión en tu cuenta
                        </h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step--, GoToLogin()" class="mb-1"
                          >Inicia sesión</v-btn
                        >
                      </div>
                      
                    </v-col>

                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1
                          class="
                            text-center
                            display-2
                            green--text
                            text--accent-4
                          "
                        >
                          Crear una cuenta
                        </h1>

                        <h4 class="text-center mt-4">
                          Ingresa tus datos para registrarte!
                        </h4>
                        <v-form>
                          <v-text-field
                            label="Nombre"
                            name="Name"
                            prepend-icon="person"
                            type="text"
                            color="green accent-4"
                          />
                          <v-text-field
                            label="Email"
                            name="Email"
                            prepend-icon="email"
                            type="text"
                            color="green accent-4"
                          />


                          <v-text-field
                            id="password"
                            label="Contraseña"
                            type="password"
                            name="password"
                            prepend-icon="lock"
                            color="green accent-4"
                          />

                          <v-text-field
                            id="passwordConfirm"
                            label="Confirmar Contraseña"
                            type="password"
                            name="passwordConfirm"
                            prepend-icon="lock"
                            color="green accent-4"
                          />
                        </v-form>
                      </v-card-text>
                      <div class="text-center mb-2">
                        <v-btn rounded color="green accent-4" dark
                          >REGISTRO</v-btn
                        >
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    step: 1,
    email: '',
    password: '',
    showPassword: false,
  }),
  props: {
    source: String,
  },
  methods: {
    GoToLogin() {
      this.$router.push("/login");
    },
    GoToRegister() {
      this.$router.push("/register");
    },
  },
};
</script>