<template>
  <div>
    <ul class="post-list">
      <post v-for="log in filterLogs" :log="log"></post>
    </ul>
    <add-post v-if="addFormActive" class="add-post"></add-post>
    <button v-if="!addFormActive" @click="addFormActive = !
    addFormActive" class="button">Nieuwe toevoegen</button>
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
      this.getLogs()

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
</style>
