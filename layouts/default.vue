<template>
  <div class="app">
    <sidebar>
      <h1 slot="header"><a href="">Stage de Voorhoede</a></h1>
      <table-of-content slot="body"></table-of-content>
    </sidebar>
    <nuxt></nuxt>
  </div>
</template>

<script>
  import sidebar from '~/components/sidebar'
  import tableOfContent from '~/components/table-of-content'

  export default {
    data () {
      return {
        showSidebar: false
      }
    },

    components: {
      sidebar,
      tableOfContent
    }
  }
</script>

<style lang="scss" scoped>
  .app {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    height: 100%;
  }
</style>
