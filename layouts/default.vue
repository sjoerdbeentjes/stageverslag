<template>
  <div class="app">
    <site-header></site-header>
    <main>
      <nuxt/>
    </main>
  </div>
</template>

<script>
import siteHeader from '~/components/site-header'

export default {
  components: {
    siteHeader
  }
}
</script>


<style lang="scss">
  main {
    .container {
       padding: 2em; 
    }
  }
</style>
