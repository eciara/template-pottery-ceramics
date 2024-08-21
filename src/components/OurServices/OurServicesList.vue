<template>
    <div class="col-sm-6 col-lg-4" v-for="item in services" :key="item.id">
        <div class="our-services__category-item" :class="{'our-services__category-item--featured' : item.id === 3}">
            <div class="our-services__category-images" v-if="item.img">
                <img :src="item.img" :alt="item.title">
            </div>
            <div class="our-services__category-content">
                <h3 class="our-services__category-title">{{ item.title }}</h3>
                <p
                    :class="{ 'our-services__category-desc--exclude-id-3': item.id === 3, 'our-services__category-desc': item.id !== 3 }">
                    {{ item.desc }}</p>
                <div class="our-services__category-actions" v-show="item.path">
                    <router-link :to="item.path" custom v-slot="{ navigate }">
                        <a @click="navigate" role="link">{{ item.btnText }}</a>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'OurServicesList',
    data() {
        return {
            services: [
                {
                    id: 1,
                    img: './../../images/our-services/our-services-1.jpg',
                    title: 'Beginner Class',
                    desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                    path: '/contact',
                    btnText: 'Learn more'
                },
                {
                    id: 2,
                    img: './../../images/our-services/our-services-5.jpg',
                    title: 'Sculpture Class',
                    desc: 'Cras ut turpis cursus, laoreet sapien vel, orn content of a page when looking at its layout.',
                    path: '/contact',
                    btnText: 'Learn more'
                },
                {
                    id: 3,
                    title: 'Join Our Class',
                    desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which look even slightly believable.',
                    path: '#',
                    btnText: 'Learn more'
                },
                {
                    id: 4,
                    img: './../../images/our-services/our-services-3.jpg',
                    title: 'Junior Class',
                    desc: 'Proin ex enim, luctus venenatis felis quis.',
                    path: '#',
                    btnText: 'Learn more'
                },
                {
                    id: 5,
                    img: './../../images/our-services/our-services-4.jpg',
                    title: 'Group Class',
                    desc: 'It is a long established fact that a reader will be distracted by the readable.',
                    path: '#',
                    btnText: 'Learn more'
                },
                {
                    id: 6,
                    img: './../../images/our-services/our-services-5.jpg',
                    title: 'Mastering Class',
                    desc: 'Nam ut neque quis nulla interdum euismod a eu justo.',
                    path: '#',
                    btnText: 'Learn more'
                },
            ],
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.our-services {

    &__category-item {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;

        &--featured {
            border: 2px solid $accent-color;
            border-radius: .75rem 10rem .75rem .75rem;
            padding: 1.5rem;
            height: 100%;
            display: flex;
        }
    }

    &__category-content {
        display: flex;
        flex-direction: column;
        height: 100%; 
    }

    &__category-title {
        margin-block: .75rem .5rem;
    }

    &__category-desc {
        flex-grow: 1;

        &--exclude-id-3 {
            font-size: .9rem;
            flex-grow: 0;
        }
    }

    &__category-actions {
        margin-top: 1rem;

        a {
            border-bottom: 2px solid $accent-color;
            padding-bottom: .25rem;

            &:after {
                content: '\2192';
                position: relative;
                top: -1px;
                left: 2px;
                font-size: 1.25rem;
            }
        }
    }

    &__category-images {
        height: 14rem;
        width: 100%;

        img {
            border-radius: 1rem;
            height: 100%;
            width: 100%;
            object-fit: cover;
            margin-bottom: .5rem;
        }
    }
}
</style>