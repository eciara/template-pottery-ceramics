<template>
  <img :src="src" :alt="alt" class="img-fluid choose-us__image"
    :class="`${classModifier ? 'choose-us__image' + classModifier : ''}`">
</template>

<script>
export default {
  props: {
    src: String,
    alt: {
      type: String,
      default: ''
    },
    classModifier: String
  }
};
</script>
