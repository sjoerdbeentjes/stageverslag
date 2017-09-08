<template>
  <form @submit.prevent="onFormSubmit" >
    <label for="title">Titel</label>
    <input :class="{invalid : !title.valid}" name="title" v-model="title.data" type="text" id="title">

    <label for="body">Body</label>
    <textarea :class="{invalid : !body.valid}" v-model="body.data" name="body" id="body" cols="30" rows="10"></textarea>

    <button>Opslaan</button>
    <button @click="close" class="danger">Annuleren</button>
  </form>
</template>

<script>
  import { mapActions, mapState } from 'vuex'

  export default {
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
        selectedWeek: state => state.selectedWeek,
        selectedMonth: state => state.selectedMonth
      })
    },

    methods: {
      ...mapActions([
        'addPost'
      ]),

      close () {
        this.$parent.$emit('close')
      },

      onFormSubmit () {
        this.title.data === '' ? this.title.valid = false : this.title.valid = true
        this.body.data === '' ? this.body.valid = false : this.body.valid = true

        if (this.title.valid && this.body.valid) {
          this.addPost({
            title: this.title.data,
            body: this.body.data,
            month: this.selectedMonth,
            week: this.selectedWeek.toLocaleLowerCase().replace(' ', '')
          })

          this.$parent.$emit('close')
        }
      }
    }
  }
</script>

<style lang="scss">
  @import '../scss/variables';

  button {
    margin-top: 1em;
  }
</style>
