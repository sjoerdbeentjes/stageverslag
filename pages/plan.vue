<template>
  <article class="container" v-html="stageplan.body"></article>
</template>

<script>
import * as stageplan from '~/data/current/stageplan.json';

export default {
  data() {
    return {
      stageplan
    }
  }
}
</script>

<style lang="scss">
article {
  padding-bottom: 5em;
    h1 {      
      @media print {
        text-align: center;
      }

      +ul {
        list-style: none;
        padding: 0;
        line-height: 1.8;
        @media print {
          position: absolute;
          width: 100%;
          text-align: center;
          bottom: 4em;
          left: 0;
        }
      }
  }

  h2 {
    @media print {
      page-break-before: always;
    }
  }

  a {
    @media print {
      color: #000;
      text-decoration: none;
    }
  }
}

</style>