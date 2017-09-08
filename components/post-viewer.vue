<template>
  <main class="post-viewer">
    <welcome v-if="!route.params.week"></welcome>
    <div v-else>
      <h1>{{ route.params.month }} - {{ route.params.week }}</h1>
      <post-list ></post-list>
    </div>
  </main>
</template>

<script>
  import { mapState } from 'vuex'

  import postList from '~/components/post-list'
  import welcome from '~/components/welcome'

  export default {
    components: {
      postList,
      welcome
    },

    data () {
      return {}
    },

    computed: {
      ...mapState({
        route: state => state.route
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
