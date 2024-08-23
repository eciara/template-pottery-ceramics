<template>
        <div class="testimonials__copy">
            <p class="testimonials__text">{{ item.desc }}</p>
        </div>
        <div class="testimonials__footer">
            <img :src="item.img" :alt="'Testimonial from ' + item.name" class="testimonials__image img-fluid">
            <div class="testimonials__info">
                <p class="testimonials__name">{{ item.name }}</p>
                <p class="testimonials__position">{{ item.position }}</p>
            </div>
        </div>
</template>

<script>
export default {
    name: 'TestimonialSlide',
    props: {
        item: Object
    }
}
</script>

<style lang="scss">
@import '@/assets/scss/variables';
.testimonials {
    &__copy {
        background-color: $white-color;
        padding: 1rem;
        border-radius: .75rem;
        margin-bottom: 1.5rem;
        position: relative;
        display: flex;
        height: 100%;

        &:after {
            content: '';
            position: absolute;
            top: 100%;
            left: calc(1rem + 30px);
            border-width: 14px 10px 14px;
            border-style: solid;
            border-color: $white-color transparent transparent;
        }
    }

    &__footer {
        display: flex;
        align-items: center;
        gap: 16px;
        padding-left: 1.5rem;
    }

    &__image {
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }

    &__name {
        font-weight: 600;
    }
}
</style>
