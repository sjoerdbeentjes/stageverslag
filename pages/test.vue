<template>
  <div>
    hoi
    {{ week }}
    {{ month }}
  </div>
</template>

<script>
  export default {
    data () {
      return {
        week: this.$route.params.week,
        month: this.$route.params.month
      }
    }
  }
</script>

