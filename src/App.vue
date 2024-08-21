<template>

  <NavigationMenu />

  <Footer />

</template>

<script>
import NavigationMenu from './components/Header/NavigationMenu.vue';
import Footer from './components/Footer/FooterBlock.vue';
import '@/assets/scss/_variables.scss';

export default {
  name: 'App',
  components: {
    NavigationMenu,

    Footer
  }
}
</script>

<style lang="scss">

</style>
