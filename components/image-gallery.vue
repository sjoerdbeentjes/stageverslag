<template>
  <section class="image-gallery">
    <img @click="openLightbox(image)" v-for="image in images" :key="image.alt" :src="`${image.url}?w=200&h=200&fit=crop&auto=compress,format`" :alt="image.alt">

    <div @click="closeLightbox" class="lightbox" v-if="lightboxIsOpen">
      <img :src="`${currentImage.url}?h=1000&auto=compress,format`" :alt="currentImage.alt">
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      lightboxIsOpen: false,
      currentImage: {}
    }
  },
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  methods: {
    openLightbox(image) {
      this.lightboxIsOpen = true;
      this.currentImage = image;
    },
    closeLightbox() {
      this.lightboxIsOpen = false;
      this.currentImage = {};
    }
  }
}
</script>

<style lang="scss">
  .image-gallery {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 2em;

    > img {
      display: block;
      width: 8em;
      height: 8em;
      margin-right: 1em;
      margin-bottom: 1em;
      cursor: pointer;
    }
  }
</style>

