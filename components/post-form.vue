<template>
  <form @submit.prevent="onFormSubmit" class="post-form">
    <label for="title">Titel</label>
    <input autofocus :class="{invalid : !title.valid}" name="title" v-model="title.data" type="text" id="title">

    <label for="body">Body</label>
    <textarea :class="{invalid : !body.valid}" v-model="body.data" name="body" id="body" cols="30" rows="10"></textarea>

    <button>Opslaan</button>
    <button @click.prevent="close" class="danger">Annuleren</button>
  </form>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import * as marked from 'marked'
  import * as toMarkdown from 'to-markdown'

  export default {
    props: {
      'logData': {
        required: false
      }
    },

    created () {
      if (this.logData) {
        this.title.data = this.logData.title
        this.body.data = toMarkdown(this.logData.body)
      }
    },

    data () {
      return {
        title: {
          data: '',
          valid: Boolean
        },
        body: {
          data: '',
          valid: Boolean
        }
      }
    },

    computed: {
      ...mapState({
        route: state => state.route
      })
    },

    methods: {
      ...mapActions([
        'addPost',
        'updatePost'
      ]),

      close () {
        this.$parent.$emit('close')
      },

      onFormSubmit () {
        this.title.data === '' ? this.title.valid = false : this.title.valid = true
        this.body.data === '' ? this.body.valid = false : this.body.valid = true

        const parsedBody = marked(this.body.data)

        if (this.title.valid && this.body.valid) {
          if (this.logData) {
            this.updatePost({
              id: this.logData.id,
              title: this.title.data,
              body: parsedBody,
              month: this.route.params.month,
              week: this.route.params.week
            })

            this.$parent.$emit('close')

            this.$parent.$emit('close')
          } else {
            this.addPost({
              title: this.title.data,
              body: parsedBody,
              month: this.route.params.month,
              week: this.route.params.week
            })

            this.$parent.$emit('close')
          }
        }
      }
    }
  }
</script>

<style lang="scss">
  @import '../scss/variables';

  button {
    margin-top: 1em;
    margin-right: 0.5em;
  }

  .post-form {
    width: 100%;
    max-width: 35em;
    margin-bottom: 2.5em;
  }
</style>
