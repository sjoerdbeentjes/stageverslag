<template>
  <div class="container">
    <div v-html="home.body"></div>
  </div>
</template>

<script>
import * as home from '~/data/home.json';

export default {
  data() {
    return {
      home
    }
  }
}
</script>

<style>
</style>
