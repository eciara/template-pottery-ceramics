<template>
    <section class="section choose-us">
        <div class="container">
            <div class="row gx-md-5">
                <ChooseUsFigure />
                <ChooseUsAside />
            </div>
        </div>
    </section>
</template>

<script>
import ChooseUsFigure from './ChooseUsFigure.vue'; 
import ChooseUsAside from './ChooseUsAside.vue'; 

export default {
    name: 'ChooseUsSection',
    components: {
        ChooseUsFigure,
        ChooseUsAside,
    }
}
</script>


<style lang="scss">
@import '@/assets/scss/_variables.scss';

.choose-us {
    &__figure {
        display: flex;
        align-items: center;
    }

    &__image {
        &--first {
            border-top-left-radius: 10rem;
        }

        &--second {
            position: relative;
            top: 2rem;
            border-bottom-right-radius: 10rem;
        }
    }
}
</style>
