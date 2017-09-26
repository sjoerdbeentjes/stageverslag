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
    padding-bottom: 3em;
    margin-bottom: 2em;
    border-bottom: 1px solid lightgrey;

    &:first-of-type {
      padding-top: 0;

      h2 {
        margin-top: 1em;
      }
    }

    &:last-of-type {
      border-bottom: none;
    }

    h2 {
      margin-bottom: 0.2em;
    }
  }
</style>
