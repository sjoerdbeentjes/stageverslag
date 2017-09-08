<template>
  <main class="post-viewer">
    <h1>{{ selectedMonth }} - {{ selectedWeek }}</h1>
    <post-list></post-list>
  </main>
</template>

<script>
  import { mapState } from 'vuex'

  import postList from '~/components/post-list'

  export default {
    components: {
      postList
    },

    data () {
      return {}
    },

    computed: {
      ...mapState({
        selectedMonth: state => state.selectedMonth,
        selectedWeek: state => state.selectedWeek
      })
    }
  }
</script>

<style lang="scss" scoped>
  @import '../scss/variables';

  .post-viewer {
    padding: 2em;
    height: 100%;
    overflow-y: auto;
    flex: 1;

    h1 {
      margin-bottom: 0.5em;
    }
  }
</style>
