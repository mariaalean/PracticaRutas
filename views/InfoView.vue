
<template>
    <NavBar>   
      <InfoComVue>
      </InfoComVue>
    </NavBar>
    <FooterPie/>
</template>
<script>
import FooterPie from '@/components/FooterPie.vue';
import NavBar from '@/components/NavBar.vue';
import InfoComVue from '@/components/InfoCom.vue';

export default{
 components: {
    NavBar,
    FooterPie,
    InfoComVue,
}
}
</script>