<template>
    <section class="section footer">
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <FooterSocialList :social="social" />
                </div>
                <div class="col-md-3">
                    <FooterMenu heading="About" :links="menuAbout" />
                </div>
                <div class="col-md-3">
                    <FooterMenu heading="Gallery" :links="menuGallery" />
                </div>
                <div class="col-md-3">
                    <FooterNewsletter :description="newsletterDescription" />
                </div>
            </div>

        </div>
    </section>
</template>

<script>
import FooterSocialList from './FooterSocialList.vue';
import FooterMenu from './FooterMenu.vue';
import FooterNewsletter from './FooterNewsletter.vue';

import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBehance } from '@fortawesome/free-brands-svg-icons';

export default {
    name: 'PageFooter',
    data() {
        return {
            social: [
                {
                    id: 1,
                    path: '#',
                    icon: faFacebookF
                },
                {
                    id: 2,
                    path: '#',
                    icon: faTwitter
                },
                {
                    id: 3,
                    path: '#',
                    icon: faYoutube
                },
                {
                    id: 4,
                    path: '#',
                    icon: faInstagram
                },
                {
                    id: 5,
                    path: '#',
                    icon: faBehance
                },
            ],
            menuAbout: [
                {
                    id: 1,
                    path: '#',
                    name: 'Our History'
                },
                {
                    id: 2,
                    path: '#',
                    name: 'Studio'
                },
                {
                    id: 3,
                    path: '#',
                    name: 'Course'
                },
                {
                    id: 4,
                    path: '#',
                    name: 'FAQs'
                },
                {
                    id: 5,
                    path: 'contact',
                    name: 'Contact'
                },
            ],
            menuGallery: [
                {
                    id: 1,
                    path: '#',
                    name: 'Workshop'
                },
                {
                    id: 2,
                    path: '#',
                    name: 'Community'
                },
                {
                    id: 3,
                    path: '#',
                    name: 'Trending'
                },
                {
                    id: 4,
                    path: '#',
                    name: 'Picks'
                },
                {
                    id: 5,
                    path: '#',
                    name: 'Exhibition'
                },
            ],
            newsletterDescription: 'Singup our Newsletter to get update information, news & insight',
            text: '',
            email: '',
            isValidEmail: false
        }
    },
    components: {
        FooterSocialList,
        FooterMenu,
        FooterNewsletter
    },
    methods: {
        handleInput(event) {
            this.text = event.target.value;
            this.validateEmail();
        },
        validateEmail() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            this.isValidEmail = emailRegex.test(this.email);
        },
        displayInputContent() {

            console.log(this.text, this.isValidEmail); // Wyświetl zawartość pola input w konsoli
        }
    }
}
</script>

<style lang="scss">
@import '@/assets/scss/_variables.scss';

.footer {
    background-image: url('../../public/images/footer-bg.jpg');
    background-size: cover;
    background-position: center;
    &__heading {
        position: relative;
        display: inline-block;
        margin-bottom: 1.5rem;

        &:after {
            content: '';
            position: absolute;
            left: 0;
            bottom: -.5rem; 
            width: 100%;
            height: 3px;
            background-color: $accent-color;
        }
    }
}
</style>