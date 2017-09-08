<template>
  <div class="app">
    <sidebar>
      <h1 slot="header"><a href="">Stage de Voorhoede</a></h1>
      <table-of-content :test="'test'" slot="body"></table-of-content>
    </sidebar>
    <post-viewer></post-viewer>
  </div>
</template>

<script>
  import sidebar from '~/components/sidebar'
  import tableOfContent from '~/components/table-of-content'
  import postViewer from '~/components/post-viewer'

  import { getHeadingMonths, getHeadingWeeks, getLogs } from './shared/index'

  export default {
    async fetch ({ store }) {
      await getHeadingMonths(store)
      await getHeadingWeeks(store)
      await getLogs(store)
    },

    components: {
      sidebar,
      tableOfContent,
      postViewer
    }
  }
</script>

<style lang="scss" scoped>
  .app {
    display: flex;
    flex-direction: row;
    height: 100%;
  }
</style>
