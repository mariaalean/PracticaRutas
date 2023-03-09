
<template>
    <NavBar>   
         <LoremIpsum />
    </NavBar>
    <FooterPie/>
</template>
<script>
import FooterPie from '@/components/FooterPie.vue';
import LoremIpsum from '@/components/LoremIpsum.vue';
import NavBar from '@/components/NavBar.vue';

export default{
 components: {
    NavBar,
    LoremIpsum,
    FooterPie
}
}
</script>