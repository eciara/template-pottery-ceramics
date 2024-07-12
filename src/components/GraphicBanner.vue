<template>
    <section class="section graphic-banner" :style="{ backgroundImage: 'url(' + backgroundImage + ')' }">
        <div class="container">
            <div class="row graphic-banner__content" :class="customClass">
                <div class="col-lg-6 col-md-10 section__aside graphic-banner__aside">
                    <p class="heading__subtitle">{{ subtitle }}</p>
                    <h2>{{ title }}</h2>
                    <p>{{ copy }}</p>
                    <div class="graphic-banner__actions">
                        <router-link :to="path" custom v-slot="{ navigate }">
                        <button @click="navigate" role="link" class="btn btn--primary">
                           {{ btnText }}
                        </button>
                    </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'GraphicBanner',
    props: {
        subtitle: String,
        title: String,
        copy: String,
        path: String,
        btnText: String,
        customClass: {
            type: String,
            default: ''
        },
        backgroundImage: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss">
.graphic-banner {
    position: relative;
    background-size: cover;
    background-position: center;
    min-height: 30vw;
    color: #fff;
    isolation: isolate;
    &:after {
      content: "";
      position: absolute;
      inset: 0;
      z-index: -1;
      background: #96abb6;
      mix-blend-mode: multiply;
    }

    &__content {
        align-items: center;
        height: 100%;

        .heading__subtitle {
            color: #fff;
        }
    }

    &__actions {
        padding-top: 1rem;
    }
}
</style>