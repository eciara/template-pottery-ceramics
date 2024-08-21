<template>
    <div class="our-products__aside">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse beatae harum alias blanditiis dolore earum dolores. Veniam, maxime! Aliquid dolorem consequuntur reprehenderit totam temporibus eligendi! Provident, rerum. Velit, fuga doloremque.</p>
        <router-link to="/contact" custom v-slot="{ navigate }">
            <button @click="navigate" role="link" class="btn btn--primary">
                All products
            </button>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'OurProductsAside'
}
</script>

<style lang="scss" scoped>

</style>
