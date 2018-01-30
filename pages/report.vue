<template>
  <div class="container report">
    <aside class="table-of-contents">
      <h1>Inhoud</h1>
      <ul>
        <li :key="heading.link" v-for="heading in headings">
          <a :href="`#${heading.link}`">{{ heading.name }}</a>
        </li>
      </ul>
    </aside>
    <article v-html="stageplan.body" v-lightbox>
    </article>
  </div>
</template>

<script>
import Vue from 'vue';

import * as stageplan from '~/data/stageverslag.json';

import Lightbox from '../directives/lightbox';
Vue.directive('lightbox', Lightbox);

export default {
  data() {
    return {
      stageplan
    }
  },

  computed: {
    headings() {
      return JSON.parse(stageplan.headings);
    }
  }
}
</script>

<style lang="scss">
.table-of-contents {
  margin-bottom: 3em;

  @media print {
    display: none;
  }

  ul {
    padding-left: 1em;
    line-height: 1.4;
  }
}

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

  p + ul {
    margin-top: 0.5em;
    line-height: 1.4;
  }

  [alt="logo"] {
    display: none;

    @media print {
      display: block;
      width: 100%;
      height: 40%;
      position: absolute;
      top: 18em;
      left: 0;
    }
  }

  h2 {
    clear: both;
    
    @media print {
      page-break-before: auto
    }

    &:target {
      border-bottom: 2px solid #eddd3e
    }
  }

  a {
    @media print {
      color: #000;
      text-decoration: none;

      &:after {
        content: " (" attr(href) ")";
        color: #7f8c8d;
        font-style: italic;
      }
    }
  }
}

</style>