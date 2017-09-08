<template>
  <li :class="{collapse: collapse}" class="table-of-content__item">
    <a @click="collapse = !collapse" href="#">{{ month }}</a>
    <ul v-if="weeks">
      <li :class="{ active : route.params.week === week.toLowerCase().replace(' ', '') && route.params.month === month }" v-for="week in weeks">
        <nuxt-link exact :to="'/' + month + '/' + week.toLowerCase().replace(' ', '')" title="">{{ week }}</nuxt-link>
      </li>
    </ul>
  </li>
</template>

<script>
  import { mapState } from 'vuex'

  const dutchMonths = [
    'januari',
    'februari',
    'maart',
    'april',
    'mei',
    'juni',
    'juli',
    'augustus',
    'september',
    'oktober',
    'november',
    'december'
  ]

  export default {
    data () {
      return {
        currentMonth: dutchMonths[new Date().getMonth()],
        collapse: true
      }
    },

    created () {
      this.collapse = this.currentMonth !== this.month
    },

    computed: {
      ...mapState({
        route: state => state.route
      })
    },

    props: ['month', 'weeks']
  }
</script>

<style lang="scss" scoped>
  @import '../scss/variables';

  .table-of-content__item.collapse {
    > ul {
      display: none;
    }
  }

  .table-of-content__item {
    a {
      display: inline-block;
      padding: 1em 1.5em;
      width: 100%;
      color: $text-color;
      text-decoration: none;

      &:hover {
        background-color: $grey;
      }
    }

    > a {
      margin-top: 1em;
      font-weight: 500;
    }

    ul li {
      &.active {
        a {
          font-weight: 500;
        }
      }
      a {
        padding-left: 2.5em;
      }
    }
  }
</style>
