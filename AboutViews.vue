
<template>
    <NavBar>   
       <AboutCom/>
    </NavBar>
    <FooterPie/>
</template>
<script>
import FooterPie from '@/components/FooterPie.vue';
import NavBar from '@/components/NavBar.vue';
import AboutCom from '@/components/AboutCom.vue';

export default{
 components: {
    NavBar,
    FooterPie,
    AboutCom
}
}
</script>