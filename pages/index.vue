<template>
  <sidebar>
    <h1 slot="header"><a href="">Stage de voorhoede</a></h1>
    <table-of-content slot="body"></table-of-content>
  </sidebar>
</template>

<script>
  import sidebar from '~/components/sidebar'
  import tableOfContent from '~/components/table-of-content'

  export default {
    components: {
      sidebar,
      tableOfContent
    }
  }
</script>
