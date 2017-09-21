<template>
  <article class="log-item">
    <h2>{{ log.title }}</h2>
    <time>{{ log.date }}</time>
    <div v-html="log.body"></div>
  </article>
</template>

<script>
export default {
  props: ['log']
}
</script>

<style lang="scss">
  .log-item {
    padding-bottom: 2em;
    margin-bottom: 2em;
    border-bottom: 1px solid lightgrey;

    &:last-of-type {
      border-bottom: none;
    }

    h2 {
      margin-bottom: 0.2em;
    }
  }
</style>
