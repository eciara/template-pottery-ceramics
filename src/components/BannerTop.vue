<template>
    <section class="home-hero-banner">
        <div class="container">
            <div class="row">
                <div class="col-lg-5 col-md-7 section__aside home-hero-banner__aside">
                    <h1>Take Hold Of Peaceful Beauty</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the
                        industry's standard.</p>
                    <div class="home-hero-banner__actions">
                        <a href="#" class="btn btn--primary">get started</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Hero-banner'
}
</script>

<style lang="scss">
.home-hero-banner {
    position: relative;
    background-image: url('../../public/images/1.jpg');
    background-size: cover;
    background-position: center 70%;
    color: #fff;
    isolation: isolate;
    height: 40vw;
    border-bottom-right-radius: 10rem;
    overflow: hidden;

    &:after {
        content: "";
        position: absolute;
        inset: 0;
        z-index: -1;
        background: #96abb6;
        mix-blend-mode: multiply;
    }

    .container,
    .row {
        height: 100%;
    }

}
</style>