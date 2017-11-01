<template>
  <article class="log-item">
    <h2>{{ log.title }}</h2>
    <time>{{ log.date }}</time>
    <div class="body" v-html="log.body"></div>
    <image-gallery :images="log.imageGallery"></image-gallery>
  </article>
</template>

<script>
import imageGallery from '~/components/image-gallery';

export default {
  components: {
    imageGallery
  },
  props: ['log']
}
</script>

<style lang="scss">
  .log-item {
    padding-bottom: 2em;
    margin-bottom: 2em;
    border-bottom: 1px solid lightgrey;

    .body {
      margin-bottom: 1em;
    }

    &:first-of-type {
      padding-top: 0;

      h2 {
        margin-top: 1em;
      }
    }

    &:last-of-type {
      border-bottom: none;
    }

    h2 {
      margin-bottom: 0.2em;
    }
  }
</style>
