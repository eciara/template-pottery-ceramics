<template>
        <div class="col-lg-3 col-sm-6" v-for="product in products" :key="product.id">
            <ProductItem :product="product" />
        </div>
</template>

<script>
import ProductItem from './ProductItem.vue';

export default {
    name: 'ProductGallery',
    components: {
        ProductItem
    },
    props: {
        products: {
            type: Array,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
