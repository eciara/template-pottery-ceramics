<template>
    <section class="section pt-0 our-services">
        <div class="container">
            <div class="row gx-lg-5">
                <div class="col-md-4 our-services__figure">
                    <img src="./../../public/images/our-services/our-services-3.jpg" alt=""
                        class="img-fluid our-services__images">
                </div>
                <div class="col-md-8 our-services__aside">
                    <p class="heading__subtitle">What we do</p>
                    <h2>Pottery Classes and Worlshops</h2>
                    <div class="our-services__copy">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium culpa quidem deleniti
                            enim eaque possimus voluptates hic rerum, veritatis blanditiis mollitia officiis error
                            omnis, voluptatum, est dolor quis? Atque, architecto! Iste hic harum blanditiis doloremque.
                            Incidunt deserunt, fugiat aliquid atque debitis reiciendis sequi recusandae ut, porro iure
                            aut quae modi, deleniti iste voluptate maiores distinctio tempore non ab architecto. Harum.
                        </p>
                    </div>
                    <div class="row our-services__footer">
                        <div class="col">
                            <router-link to="/portfolio" custom v-slot="{ navigate }">
                                <a @click="navigate" role="link" class="btn btn--primary">
                                    Discover More
                                </a>
                            </router-link>
                        </div>
                        <div class="col-3">
                            <img src="./../../public/images/our-services/our-services-footer.png" alt=""
                                class="img-fluid">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row our-services__subcategory gy-5 gx-lg-5">
                <OurServicesList />
            </div>
        </div>
    </section>
</template>

<script>
import OurServicesList from './OurServicesList.vue';
export default {
    name: 'OurServices',
    components: {
        OurServicesList
    }
}
</script>

<style lang="scss">
@import './../assets/scss/variables';

.our-services {
    &__aside {
        &>*+* {
            margin-top: 1.5rem;
        }
    }

    &__images {
        border-bottom-left-radius: 10rem;
        overflow: hidden;
    }

    &__copy {
        column-count: 2;
    }

    &__footer {
        align-items: center;
        padding-top: 1.5rem;
    }

    &__subcategory {
        padding-top: 5rem;
        display: flex;
        flex-wrap: wrap;
    }
}
</style>