
<template>
    <NavBar>   
      <SomosComVue/>
    </NavBar>
    <FooterPie/>
</template>
<script>
import FooterPie from '@/components/FooterPie.vue';
import NavBar from '@/components/NavBar.vue';
import SomosComVue from '@/components/SomosCom.vue';

export default{
 components: {
    NavBar,
    FooterPie,
    SomosComVue

}
}
</script>