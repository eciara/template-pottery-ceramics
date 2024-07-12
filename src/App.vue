<template>

  <NavigationMenu />

  <Footer />

</template>

<script>
import NavigationMenu from './components/NavigationMenu.vue';
import Footer from './components/Footer.vue';
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
