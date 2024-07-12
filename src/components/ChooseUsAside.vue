<template>
    <div class="col-lg-6 choose-us__aside">
        <p class="heading__subtitle">What Choose Us</p>
        <h2>Utilize your craftsmanship here</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptate dicta eligendi fuga
            voluptatem
            molestias!</p>
        <ChooseUsBlock :boxes="boxes" />
    </div>
</template>

<script>
import ChooseUsBlock from './ChooseUsBlock.vue';

import { faMedal } from '@fortawesome/free-solid-svg-icons';
import { faPaintbrush } from '@fortawesome/free-solid-svg-icons';

export default {
    components: {
        ChooseUsBlock
    },
    data() {
        return {
            boxes: [
                {
                    position: 'first',
                    icon: faMedal,
                    title: 'Certified teachers',
                    text: 'Lorem ipsum dolor sit amet.'
                },
                {
                    position: 'second',
                    icon: faPaintbrush,
                    title: 'Ceramic equipment',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing.'
                }
            ]
        };
    }
};
</script>


<style lang="scss">
@import '@/assets/scss/_variables.scss';

.choose-us {
    &__aside {
        >*+* {
            margin-top: 1.5rem;
        }
    }

    &__block {
        display: flex;

        @media (max-width: 575.98px) {
            flex-direction: column;
        }

    }

    &__box {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 1.5rem;
        border: 1px solid #ddd;

        &--first {
            background-color: #e6e6e6;
            border-top-left-radius: .75rem;

            @media (min-width: 576px) {
                border-bottom-left-radius: .75rem;
            }
        }

        &--second {
            border-bottom-right-radius: .75rem;

            @media (min-width: 576px) {
                border-top-right-radius: .75rem;
            }
        }

        &--icon {
            font-size: 1.75rem;
            color: $accent-color;
            margin-bottom: .5rem;
        }

        &--title {
            font-size: 1.1rem;
            font-weight: 600;
        }
    }

}
</style>
