<template>
  <div class="container">
    <log-item :key="log.id" :log="log" v-for="log in logs" v-if="logs.length"></log-item>
    <p class="no-result" v-if="!logs.length">Er zij nog geen logs 🙃</p>
  </div>
</template>

<script>
import logItem from '~/components/log-item';
import { mapGetters } from 'vuex'

export default {
  components: {
    logItem
  },
  computed: {
    ...mapGetters([
      'logs'
    ])
  }
}
</script>

<style>
  .no-result {
    text-align: center;
  }
</style>
