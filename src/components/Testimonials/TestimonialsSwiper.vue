<template>
    <swiper 
        :spaceBetween="24" 
        :freeMode="true" 
        :pagination="{ clickable: true }" 
        :modules="swiperModules"
        :breakpoints="swiperBreakpoints" 
        :autoplay="swiperAutoplay" 
        class="testimonials__swiper">
        <swiper-slide v-for="item in opinions" :key="item.id" class="testimonials__slide">
            <TestimonialSlide :item="item" />
        </swiper-slide>
    </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import TestimonialSlide from './TestimonialSlide.vue';

export default {
    name: 'TestimonialsSwiper',
    components: {
        Swiper,
        SwiperSlide,
        TestimonialSlide
    },
    props: {
        opinions: Array
    },
    setup() {
        const swiperModules = [FreeMode, Pagination, Autoplay];
        const swiperBreakpoints = {
            320: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            1200: { slidesPerView: 3 }
        };
        const swiperAutoplay = { delay: 3000, disableOnInteraction: false };
        return {
            swiperModules,
            swiperBreakpoints,
            swiperAutoplay
        };
    }
}
</script>

<style lang="scss">
.testimonials {
    .swiper {
        padding-bottom: 4rem;
    }

    .swiper-slide {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
}
</style>
