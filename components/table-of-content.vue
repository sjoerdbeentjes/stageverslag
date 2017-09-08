<template>
  <ul class="table-of-contents">
    <table-of-content-item v-for="month in headings.months" v-bind:key="month" :weeks="headings.weeks" :month="month"></table-of-content-item>
  </ul>
</template>

<script>
  import tableOfContentItem from '~/components/table-of-content-item'
  import { mapState, mapActions } from 'vuex'

  export default {
    components: {
      tableOfContentItem
    },

    data () {
      return {}
    },

    computed: {
      ...mapState({
        headings: state => state.headings
      })
    },

    methods: {
      ...mapActions([
        'getHeadingMonths',
        'getHeadingWeeks'
      ])
    }
  }
</script>

<style lang="scss" scoped>
    @import '../scss/variables';

  ul {
    list-style: none;
  }

  .table-of-contents {
    padding: 0;
  }
</style>
