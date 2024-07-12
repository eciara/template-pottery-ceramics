<template>
    <section class="content-section">
        <div class="container section">
            <div class="row gx-5">
                <div class="col-md-6">
                    <h3 class="content-section__heading">{{ heading }}</h3>
                </div>
                <div class="col-md-6">
                    <p class="content-section__paragraf">{{ paragraph }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'TextContainer',
    props: {
        heading: String,
        paragraph: String
    }
}
</script>

<style lang="scss">
.content-section {
    &__heading {
        font-size: 1.4rem;
        line-height: 150%;
    }

}
</style>