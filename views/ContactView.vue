
<template>
    <NavBar>   
       <ContacCom/> 
    </NavBar>
    <FooterPie/>
</template>
<script>
import FooterPie from '@/components/FooterPie.vue';
import NavBar from '@/components/NavBar.vue';
import ContacCom from '@/components/ContacCom.vue'; 

export default{
 components: {
    NavBar,
    ContacCom,
    FooterPie
}
}
</script>