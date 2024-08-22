<template>
    <section class="section pt-3 our-team">
        <div class="container">
            <div class="our-team__header">
                <h2 class="our-team__title heading-underline">People behind Pottero</h2>
            </div>
            <div class="our-team__list">
                <div class="row g-4">
                    <OurTeamList />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import OurTeamList from './OurTeamList.vue';
export default {
    name: 'OurTeamSection',
    components: {
        OurTeamList
    }
}
</script>

<style lang="scss">
@import '@/assets/scss/_variables.scss';

.our-team {

}
</style>