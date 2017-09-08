<template>
  <div>
    <add-post v-if="addFormActive" class="add-post"></add-post>
    <button v-if="!addFormActive" @click="addFormActive = !
    addFormActive" class="button">Nieuwe toevoegen</button>

    <ul class="post-list">
      <post v-for="(log, index) in filterLogs" v-bind:key="index" :log="log"></post>
    </ul>

    <p v-if="!addFormActive && !filterLogs.length" class="no-result">Er zijn helaas nog geen berichten 😕</p>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  import post from '~/components/post'
  import addPost from '~/components/add-post'

  export default {
    components: {
      post,
      addPost
    },

    data () {
      return {
        addFormActive: false
      }
    },

    created () {
      this.$on('close', () => {
        this.addFormActive = false
      })
    },

    computed: {
      ...mapGetters([
        'filterLogs'
      ])
    },

    methods: {
      ...mapActions([
        'getLogs'
      ])
    }
  }
</script>

<style lang="scss">
  @import '../scss/variables';

  button {
    margin-right: 0.5em;
    margin-top: 1em;

    &:last-of-type {
      margin-right: 0;
    }
  }

  .post-list {
    margin-bottom: 2em;
  }

  .add-post {
    width: 100%;
    max-width: 35em;
  }

  .no-result {
    margin-top: 2em;
  }
</style>
