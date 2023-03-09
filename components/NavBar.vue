<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <v-btn  v-for="(item,index) in rutas" :key="index"
        block
        color="primary"
        variant="tonal"
        class="d-block  my-1 font-weight-black"
        @click="url(item.ruta)"> 
        <!-- el click es otra forma linkear mediante una función -->
        <span>{{ item.nombre}}</span> 
      </v-btn>
        <!-- <router-link to="/home"> es una forma de linkear-->
      <!-- <v-btn  v-for="(item,index) in rutas" :key="index"
        color="primary"
        variant="tonal"
        class="d-block ma-auto pa-auto px-11 my-2"
        @click="url(item.ruta)">  -->
        <!-- el click es otra forma linkear mediante una función -->
        <!-- <span>{{ item.nombre }}</span> 
      </v-btn> -->
    <!-- </router-link> -->

    <!-- <router-link to="/about"> -->
    <!-- <v-btn color="primary"
    variant="tonal"
    class="d-block ma-auto pa-auto px-10 my-2"
    @click="url('/about')">
        <span>About</span>
    </v-btn> -->
<!-- </router-link> -->
    </v-navigation-drawer>

    <v-app-bar class="bg-purple-lighten-2 text-purple-darken-4 ">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="font-weight-black">Application</v-toolbar-title>
      
      <router-link to="/acceder" style="text-decoration: none;">
        <v-btn rounded-pill  variant="outlined" class="bg-purple-darken-1 text-black mr-10"
        >
          <span>acceder</span>
        </v-btn>
      </router-link>
    </v-app-bar>

    <v-main>
        <slot></slot>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ drawer: false,
    rutas: [
        {nombre: 'home', ruta: "/"},
        {nombre: 'help', ruta: '/help'},
        {nombre: 'about', ruta: "/about"},
        {nombre: 'info', ruta: '/info'},
        {nombre: 'contactanos', ruta: "/contactanos"},
        {nombre: 'Quienes somos', ruta: '/somos'},
    ]
}),
    methods:{
        url(ruta){
            this.$router.push(ruta)
        }
    }
  }
</script>