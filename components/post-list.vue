<template>
  <div>
    <post-form v-if="addFormActive"></post-form>
    <button v-if="!addFormActive" @click="addFormActive = !
    addFormActive" class="add-post-button">Nieuwe toevoegen</button>

    <ul v-if="filterLogs.length" class="post-list">
      <post v-for="(log, index) in filterLogs" v-bind:key="index" :log="log"></post>
    </ul>

    <p v-if="!addFormActive && !filterLogs.length" class="no-result">Er zijn helaas nog geen berichten 🙃</p>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  import post from '~/components/post'
  import postForm from '~/components/post-form'

  export default {
    components: {
      post,
      postForm
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

  .add-post-button {
    margin-right: 0.5em;
    margin-top: 1em;
    margin-bottom: 2.5em;

    &:last-of-type {
      margin-right: 0;
    }
  }

  .post-list {
    margin-bottom: 2em;
  }
</style>
