<template>
    <nav_bar>
            <HelloWorld/>
    </nav_bar>
    <FooterPie/>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  // Components
  import nav_bar from '../components/NavBar.vue';
import HelloWorld from '@/components/HelloWorld.vue';
import FooterPie from '@/components/FooterPie.vue';

  export default defineComponent({
    name: 'InicioView',
  
    components: {
    nav_bar,
    HelloWorld,
    FooterPie 
},
  });
  </script>
  