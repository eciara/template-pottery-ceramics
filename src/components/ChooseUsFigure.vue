<template>
    <div class="col-lg-6 choose-us__figure">
        <div class="row">
            <div class="col">
                <ChooseUsImage src="./../../images/choose-us/choose-us_1.jpg" classModifier="--first" />
            </div>
            <div class="col">
                <ChooseUsImage src="./../../images/choose-us/choose-us_2.jpg" classModifier="--second" />
            </div>
        </div>
    </div>
</template>

<script>
import ChooseUsImage from './ChooseUsImage.vue';

export default {
    components: {
        ChooseUsImage
    }
};
</script>
