<template>
  <article class="post">
    <h2>{{ log.title }}</h2>
    <p>{{ log.body }}</p>
  </article>
</template>

<script>
  import {mapState} from 'vuex'
  import * as marked from 'marked'

  export default {
    components: {},

    computed: {
      ...mapState({
        logs: state => state.logs
      }),

      postHTML () {
        return marked(this.log.body)
      }
    },

    props: ['log']
  }
</script>

<style lang="scss">
  @import '../scss/variables';

  .post {
    max-width: 35em;
    padding: 2.5em 0;
    border-bottom: 1px solid $lighter-grey;

    p {
      margin-top: 1em;
    }

    ul {
      padding-left: 1em;
      margin-top: 1em;
    }
  }
</style>
