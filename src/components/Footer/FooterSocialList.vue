<template>
    <div class="footer__box">
        <p><strong>Follow Us:</strong></p>
        <ul class="footer__social-list">
            <li class="footer__social-list--link" v-for="item in social" :key="item.id">
                <font-awesome-icon :icon="item.icon" />
            </li>
        </ul>
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
    name: 'FooterSocialList',
    props: {
        social: {
            type: Array,
            required: true
        }
    },
    components: {
        FontAwesomeIcon
    }
}
</script>

<style lang="scss">
@import '@/assets/scss/_variables.scss';

.footer {
    &__box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
    }
    &__social-list {
        display: flex;
        list-style: none;
        gap: .5rem;
        margin-top: 1rem;

        &--link {
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 5px;
            font-size: .85rem;
            width: 1.6rem;
            height: 1.6rem;
            color: #fff;
            background-color: $accent-color;
        }
    }
}
</style>