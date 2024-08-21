<template>
    <div>
        <h4 class="footer__heading">{{ heading }}</h4>
        <ul class="footer__menu">
            <li class="footer_menu--link" v-for="link in links" :key="link.id" >
                {{ link.name }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'FooterMenu',
    props: {
        heading: {
            type: String,
            required: true
        },
        links: {
            type: Array,
            required: true
        }
    }
}
</script>

<style lang="scss">
.footer {
    &__menu {
        list-style: none;
    }

}
</style>