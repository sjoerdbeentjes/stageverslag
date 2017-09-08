<template>
  <transition name="slide">
    <aside class="sidebar" v-show="!show">
      <header class="sidebar__header">
        <slot name="header"></slot>
      </header>
      <div class="sidebar__body">
        <slot name="body"></slot>
      </div>
    </aside>
  </transition>
</template>

<script>
  export default {
    props: ['show']
  }
</script>

<style lang="scss">
  @import '../scss/variables';

  .sidebar {
    border-right: 1px solid $lighter-grey;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .sidebar__header {
    padding: 1.5rem;
    border-bottom: 1px solid $lighter-grey;
    position: relative;

    h1 {
      font-weight: 400;

      a {
        text-decoration: none;
        color: $text-color;

        &:after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
        }
      }
    }
  }

  .sidebar__body {
    overflow-y: auto;
  }
</style>
