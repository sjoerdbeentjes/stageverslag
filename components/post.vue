<template>
  <div>
    <post-form v-if="editMode" method="post" :logData="log"></post-form>

    <article v-else class="post">
      <header>
        <h2>{{ log.title }}</h2>
        <button class="edit" @click="editMode = true">Edit</button>
        <button @click="removePost(log.id)" class="remove danger">Verwijder</button>
      </header>
      <p v-html="log.body"></p>
    </article>  
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  import * as marked from 'marked'

  import postForm from '~/components/post-form'

  export default {
    components: {
      postForm
    },

    data () {
      return {
        editMode: false
      }
    },

    created () {
      this.$on('close', () => {
        this.editMode = false
      })
    },

    computed: {
      ...mapState({
        logs: state => state.logs
      }),

      postHTML () {
        return marked(this.log.body)
      }
    },

    methods: {
      ...mapActions([
        'removePost'
      ])
    },

    props: ['log']
  }
</script>

<style lang="scss">
  @import '../scss/variables';

  .post {
    max-width: 35em;
    padding-bottom: 2.5em;
    margin-bottom: 2.5em;
    border-bottom: 1px solid $lighter-grey;

    header {
      display: flex;

      button {
        font-size: 1rem;
        padding: 0.5em 1em;
        margin-top: 0;
        margin-right: 0.5em;

        &.edit {
          margin-left: auto;
        }
      }
    }

    p {
      margin-top: 1em;
    }

    ul {
      padding-left: 1em;
      margin-top: 1em;
    }
  }
</style>
