<template>
  <div class="app">
    <site-header></site-header>
    <main>
      <nuxt/>
    </main>
  </div>
</template>

<script>
import * as logs from '~/data/logs.json';
import siteHeader from '~/components/site-header'
import { mapActions } from 'vuex'

export default {
  components: {
    siteHeader
  },
  created() {
    this.setLogs(logs);
  },
  methods: {
    ...mapActions([
      'setLogs'
    ])
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
