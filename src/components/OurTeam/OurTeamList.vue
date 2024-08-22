<template>
    <div class="col-sm-6 col-md-3 our-team-box" v-for="item in team" :key="item.id">
        <div class="our-team-box__figure">
            <img :src="item.img" :alt="`${item.name} - ${item.position}`" class="our-team-box__image img-fluid">
        </div>
        <div class="our-team-box__copy">
            <h4 class="our-team-box__title">{{ item.name }}</h4>
            <p class="our-team-box__subtitle">{{ item.position }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OurTeamList',
    data() {
        return {
            team: [
                {
                    id: 1,
                    img: './assets/images/our-team/our-team_1.jpg',
                    name: 'Amelia Olson',
                    position: 'Ceramicist'
                },
                {
                    id: 2,
                    img: './assets/images/our-team/our-team_2.jpg',
                    name: 'George Evans',
                    position: 'Ceramics technologist'
                },
                {
                    id: 3,
                    img: './assets/images/our-team/our-team_3.jpg',
                    name: 'Olivia Conley',
                    position: 'Ceramics designer'
                },
                {
                    id: 4,
                    img: './assets/images/our-team/our-team_4.jpg',
                    name: 'Thomas Hanson',
                    position: 'Ceramic glazier'
                },
            ],
        }
    }
}
</script>

<style lang="scss" scoped>
.our-team-box {
    &__image {
        border-radius: .75rem;
    }
    &__copy {
        text-align: center;
        padding: .5rem .5rem 0;
    }
    &__subtitle {
        font-size: .85rem;
    }
}
</style>