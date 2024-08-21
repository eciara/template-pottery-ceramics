<template>
    <section class="section our-team">
        <div class="container">
            <header class="our-team__header">
                <h2 class="our-team__title">People behind Pottero</h2>
            </header>
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
    &__header {
        text-align: center;
        margin-bottom: 2.75rem;

        &:after {
            content: '';
            position: relative;
            top: 1rem;
            display: block;
            margin-inline: auto;
            background-color: $accent-color;
            width: 5rem;
            height: 3px;
        }
    }
}
</style>