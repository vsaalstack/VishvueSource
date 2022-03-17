<template>    
    <Header />
    
    <HeroBanner />  
    <SchonklinkSection />

    <Footer />
</template>

<script>
import './assets/js/header.js';
import Header from './components/Header.vue'
import HeroBanner from './components/HeroBanner.vue'
import SchonklinkSection from './components/SchonklinkSection.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {  
    Header, HeroBanner, SchonklinkSection, Footer
  }
}
</script>

<style lang="scss">
  //@import './assets/css/style.css';
  @import "./assets/sass/header.scss";
</style>
