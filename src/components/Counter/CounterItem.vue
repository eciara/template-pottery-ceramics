<template>
    <div class="row" ref="counter">
        <div class="col-sm-6 col-lg-3 counter-item" v-for="item of couterList" :key="item.id">
            <div class="counter-item__number">
                <AnimatedCounter :value="item.value" :duration="item.duration" /><span v-show="item.id == 2">%</span>
            </div>
            <p class="counter-item__title">{{ item.text }}</p>
        </div>
    </div>
</template>

<script>
import AnimatedCounter from 'vue-animated-counter';

export default {
    name: 'CounterItem',
    components: {
        AnimatedCounter
    },
    data() {
        return {
            couterList: [
                {
                    id: 1,
                    value: 15,
                    duration: 500,
                    text: 'Years of Expercince'
                },
                {
                    id: 2,
                    value: 97,
                    duration: 1500,
                    text: "Happy Student"
                },
                {
                    id: 3,
                    value: 70,
                    duration: 900,
                    text: "Event & Exhibitions"
                },
                {
                    id: 4,
                    value: 40,
                    duration: 2000,
                    text: "Expert instructors"
                },
            ],
            isVisible: false
        }
    },
    mounted() {
        this.createObserver();
    },
    beforeUnmount() {
        if (this.observer) {
            this.observer.disconnect();
        }
    },
    methods: {
        createObserver() {
            this.observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.isVisible = true;
                        this.observer.disconnect();
                    }
                });
            });

            this.observer.observe(this.$refs.counter);
        }
    }
}
</script>

<style lang="scss">
@import '@/assets/scss/_variables.scss';

.counter-item {
    text-align: center;
    padding-top: 2.5rem;

    &__number {
        display: inline-flex;
        font-size: 2.5rem;
        font-weight: 600;
        color: $accent-color;
    }

    &:not(:first-child) {
        &:after {
            @media (min-width: 576px) {
                content: '';
                position: relative;
                top: -100%;
                display: block;
                background-color: $accent-color;
                width: 1px;
                height: 100%;
            }
        }
    }

    &:nth-child(3) {
        &:after {
            @media (min-width: 576px) and (max-width: 991.98px) {
                display: none;
            }
        }
    }

    &__title {
        font-weight: 600;
    }
}
</style>