<template>
    <h4 class="footer__heading">Newsletter</h4>
    <p class="small">{{ description }}</p>
    <div class="footer__action">
        <input v-model="email" placeholder="Enter your email" class="footer__input">

        <button @click="subscribe" class="btn btn--primary footer__btn">Subscribe</button>
        <p v-if="isValidEmail">Email is valid</p>
        <p v-else>Email is not valid</p>
    </div>
</template>

<script>
export default {
    name: 'FooterNewsletter',
    data() {
        return {
            email: '',
            isValidEmail: false
        }
    },
    props: {
        description: {
            type: String,
            required: true
        }
    },
    methods: {
        subscribe() {
            // Logika subskrypcji newslettera
        }
    }
}
</script>

<style lang="scss">
.footer {
    &__action {
        display: flex;
        flex-direction: column;
        margin-top: 1rem;
    }
    &__btn {
        margin-top: .5rem;
    }
}

input {
    padding: .25rem;
    max-width: 100%;

    &::placeholder {
        font-size: .85rem;
    }
}
</style>