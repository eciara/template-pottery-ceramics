<template>
    <section class="section testimonials">
        <div class="container">
            <div class="row testimonials__content">
                <TestimonialsHeader />
                <TestimonialsSwiper :opinions="opinions" />
            </div>
        </div>
    </section>
</template>

<script>
import TestimonialsHeader from './TestimonialsHeader.vue';
import TestimonialsSwiper from './TestimonialsSwiper.vue';

export default {
    name: 'TestimonialsSection',
    components: {
        TestimonialsHeader,
        TestimonialsSwiper
    },
    data() {
        return {
            opinions: [
            {
                id: 1,
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit tortor semper odio elementum, non semper odio lobortis.',
                img: require('@/assets/images/testimonials/person_1.jpg'),
                name: 'Lilly Kidd',
                position: 'Director'
            },
            {
                id: 2,
                desc: 'Praesent laoreet tellus in ultrices eleifend. Donec vitae ligula ac est rutrum cursus. Morbi elit justo, hendrerit eu dui eget, pulvinar eleifend felis.',
                img: require('@/assets/images/testimonials/person_2.jpg'),
                name: 'Marlene Cardenas',
                position: 'Manager'
            },
            {
                id: 3,
                desc: 'Nam sit amet fermentum mauris. Suspendisse tortor dolor, volutpat in justo eu, ultrices consectetur lectus.',
                img: require('@/assets/images/testimonials/person_3.jpg'),
                name: 'Kyle Clifford',
                position: 'Coordinator'
            },
            {
                id: 4,
                desc: 'Proin mollis iaculis mauris ac viverra. Aliquam vel justo sed orci finibus aliquet',
                img: require('@/assets/images/testimonials/person_4.jpg'),
                name: 'Gavin Bailey',
                position: 'Consultant'
            },
            {
                id: 5,
                desc: 'Quisque non scelerisque massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec non diam at lacus congue imperdiet.',
                img: require('@/assets/images/testimonials/person_5.jpg'),
                name: 'Jaxson Curran',
                position: 'Supervisor'
            },
            {
                id: 6,
                desc: 'Sed maximus enim ut imperdiet iaculis. Nulla facilisi. Cras vitae neque non ante vulputate suscipit id id ante.',
                img: require('@/assets/images/testimonials/person_6.jpg'),
                name: 'Lara Cooney',
                position: 'Designer'
            },
            {
                id: 7,
                desc: 'Quisque mattis pellentesque risus id ornare. Phasellus convallis ultricies dignissim.',
                img: require('@/assets/images/testimonials/person_7.jpg'),
                name: 'Christina Huber',
                position: 'Artisan'
            },
            {
                id: 8,
                desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                img: require('@/assets/images/testimonials/person_8.jpg'),
                name: 'Jean Ellis',
                position: 'Craftsperson'
            },
            ]
        };
    }
}
</script>

<style lang="scss">
.testimonials {
    background-image: url('@/assets/images/testimonials/testimonials-bg.jpg');
    background-size: cover;
    background-position: top;
    padding: 2rem 0;

    
}
</style>