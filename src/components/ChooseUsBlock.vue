<template>
    <div class="choose-us__block">
        <ChooseUsBox v-for="(box, index) in boxes" :key="index" :box="box" />
    </div>
</template>

<script>
import ChooseUsBox from './ChooseUsBox.vue';

export default {
    components: {
        ChooseUsBox
    },
    props: {
        boxes: {
            type: Array,
            default: () => []
        }
    }
};
</script>
