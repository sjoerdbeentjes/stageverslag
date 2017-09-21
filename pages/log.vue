<template>
  <div class="container">
    <log-item :key="log.id" :log="log" v-for="log in logs"></log-item>
  </div>
</template>

<script>
import * as logs from '~/data/current/logs.json';

import logItem from '~/components/log-item';

export default {
  components: {
    logItem
  },
  data() {
    return {
      logs
    }
  }
}
</script>

<style>

</style>
