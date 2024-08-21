<!-- OurProducts.vue -->
<template>
    <section class="section our-products">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <p class="our-products__subtitle">Our Product</p>
                    <h2 class="our-products__title">The soothing feeling of pottery</h2>
                </div>
                <div class="col-md-6">
                    <OurProductsAside />
                </div>
            </div>
            <div class="row our-products__gallery">
                <ProductGallery :products="products" />
            </div>
        </div>
    </section>
</template>

<script>
import ProductGallery from './ProductGallery.vue';
import OurProductsAside from './OurProductsAside.vue';

export default {
    name: 'OurProductsSection',
    components: {
        ProductGallery,
        OurProductsAside
    },
    data() {
        return {
            products: [
                {
                    id: 1,
                    photo: './assets/images/our-products/our-products_1.jpg',
                    title: 'Modern Pottery',
                    desc: 'Quisque cursus lacinia justo eget eleifend. Integer venenatis nisi odio.'
                },
                {
                    id: 2,
                    photo: './assets/images/our-products/our-products_2.jpg',
                    title: 'Ceramic Dishes',
                    desc: 'Urabitur tempus pellentesque dolor.'
                },
                {
                    id: 3,
                    photo: './assets/images/our-products/our-products_3.jpg',
                    title: 'Coffee Cup',
                    desc: 'Praesent placerat fermentum nisi, ac dapibus nisl varius.'
                },
                {
                    id: 4,
                    photo: './assets/images/our-products/our-products_4.jpg',
                    title: 'Table Ware',
                    desc: 'Curabitur et quam pulvinar, sodales tellus ac, commodo sapien'
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.our-products {
    &__aside {
        &>*+* {
            margin-top: 1.5rem;
        }
    }

    &__gallery {
        padding-top: 3rem;

        &--copy {
            text-align: center;
            padding: .5rem .5rem 0;
        }

        &--image {
            width: 100%;
            border-radius: .75rem;
        }

        p {
            font-size: .85rem;
        }
    }
}
</style>
