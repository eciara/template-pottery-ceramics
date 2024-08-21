<template>
    <div class="our-products__gallery--box">
        <img :src="product.photo" :alt="product.title" class="our-products__gallery--image">
        <div class="our-products__gallery--copy">
            <h4 class="our-products__gallery--title">{{ product.title }}</h4>
            <p>{{ product.desc }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductItem',
    props: {
        product: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.our-products {
    &__gallery {
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

        &--box {
            margin-bottom: 1rem;
        }
    }
}
</style>