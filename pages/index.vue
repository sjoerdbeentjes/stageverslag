<template>
  <post-viewer></post-viewer>
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
  .app-main {
    flex: 1;
  }
</style>
