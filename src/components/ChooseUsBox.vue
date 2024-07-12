<template>
    <div :class="`col choose-us__box choose-us__box--${box.position}`">
        <div class="choose-us__box--icon">
            <font-awesome-icon :icon="box.icon" />
        </div>
        <p class="choose-us__box--title">{{ box.title }}</p>
        <p class="choose-us__box--text">{{ box.text }}</p>
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
    components: {
        FontAwesomeIcon
    },
    props: {
        box: {
            type: Object,
            default: () => ({})
        }
    }
};
</script>
