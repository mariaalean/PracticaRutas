
<template>
    <NavBar>   
       <AccederCom/> 
    </NavBar>
    <FooterPie/>
</template>
<script>
import FooterPie from '@/components/FooterPie.vue';
import NavBar from '@/components/NavBar.vue';
import AccederCom from '@/components/AccederCom.vue';

export default{
 components: {
    NavBar,
    AccederCom,
    FooterPie
}
}
</script>