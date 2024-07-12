<template>
    <section class="section our-products">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <p class="heading__subtitle">Our Product</p>
                    <h2>The soothing feeling of pottery</h2>
                </div>
                <div class="col-md-6 our-products__aside">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse beatae harum alias blanditiis
                        dolore earum dolores. Veniam, maxime! Aliquid dolorem consequuntur reprehenderit totam
                        temporibus eligendi! Provident, rerum. Velit, fuga doloremque.</p>
                    <div class="">
                        <router-link to="/contact" custom v-slot="{ navigate }">
                            <button @click="navigate" role="link" class="btn btn--primary">
                                All products
                            </button>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="row our-products__gallery">
                <div class="col-lg-3 col-sm-6 our-products__gallery--box" v-for="product in products"
                    :key="product.id">
                    <img :src="product.photo" :alt="product.title" class="our-products__gallery--image">
                    <div class="our-products__gallery--copy">
                        <h4 class="our-products__gallery--title">{{ product.title }}</h4>
                        <p>{{ product.desc }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'OurProducts',
    data() {
        return {
            products: [
                {
                    id: 1,
                    photo: './../images/our-products/our-products-1.jpg',
                    title: 'Modern Pottery',
                    desc: 'Quisque cursus lacinia justo eget eleifend. Integer venenatis nisi odio.'
                },
                {
                    id: 2,
                    photo: './../images/our-products/our-products-2.jpg',
                    title: 'Ceramic Dishes',
                    desc: 'Urabitur tempus pellentesque dolor.'
                },
                {
                    id: 3,
                    photo: './../images/our-products/our-products-3.jpg',
                    title: 'Coffee Cup',
                    desc: 'Praesent placerat fermentum nisi, ac dapibus nisl varius.'
                },
                {
                    id: 4,
                    photo: './../images/our-products/our-products-4.jpg',
                    title: 'Table Ware',
                    desc: 'Curabitur et quam pulvinar, sodales tellus ac, commodo sapien'
                },
            ]
        }
    }
}
</script>

<style lang="scss">
.our-products {
    &__aside {
        &>*+* {
            margin-top: 1.5rem;
        }
    }

    &__gallery {
        padding-top: 3rem;

        &--box {
            --bs-gutter-y: 2rem;
        }
        &--copy {
            text-align: center;
            padding: 1rem 1rem 0;
        }

        &--image {
            width: 100%;
            border-radius: 1rem;
        }

        &--title {
            margin-bottom: .5rem;
        }

        p {
            font-size: .9rem;
        }
    }

}
</style>