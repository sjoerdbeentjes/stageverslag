<template>
  <li :class="{collapse: collapse}" class="table-of-content__item">
    <a @click="collapse = !collapse" href="#">{{ month }}</a>
    <ul v-if="weeks">
      <li :class="{ active : selectedWeek === week && selectedMonth === month }" v-for="week in weeks">
        <a href="#" @click="setSelectedWeek(week); setSelectedMonth(month)">{{ week }}</a>
      </li>
    </ul>
  </li>
</template>

<script>
  import { mapActions, mapState } from 'vuex'

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
      this.setSelectedMonth(this.currentMonth)
      this.setSelectedWeek(this.weeks[0])
    },

    computed: {
      ...mapState({
        selectedWeek: state => state.selectedWeek,
        selectedMonth: state => state.selectedMonth
      })
    },

    methods: {
      ...mapActions([
        'setSelectedWeek',
        'setSelectedMonth'
      ])
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
