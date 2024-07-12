<template>
    <section class="counter">
        <div class="container">
            <div class="row">
                <img src="./../../public/images/couter-banner.jpg" alt="" class="counter__images">
            </div>
            
            <CounterItem />

        </div>
    </section>
</template>

<script>
import CounterItem from './CounterItem.vue';

export default {
    name: 'CounterComponent',
    components: {
        CounterItem
    }
}
</script>

<style lang="scss">
.counter {
    &__images {
        height: 30rem;
        object-fit: cover;
    }
}
</style>