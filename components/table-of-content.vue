<template>
  <ul class="table-of-contents">
    <li v-for="chapter in chapters">
      <a href="#">{{ chapter.title }}</a>
      <ul>
        <li v-for="chapter in chapter.chapters">
          <a href="#">{{ chapter.title }}</a>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
  export default {
    data () {
      return {
        chapters: [
          {
            title: 'Januari',
            chapters: [
              {
                title: 'Week 1'
              },
              {
                title: 'Week 2'
              },
              {
                title: 'Week 3'
              },
              {
                title: 'Week 4'
              }
            ]
          },
          {
            title: 'Februari',
            chapters: [
              {
                title: 'Week 1'
              },
              {
                title: 'Week 2'
              },
              {
                title: 'Week 3'
              },
              {
                title: 'Week 4'
              }
            ]
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../scss/variables';

  ul {
    list-style: none;
  }

  .table-of-contents {
    padding: 0;
  }

  .table-of-contents > li a {
    display: inline-block;
    padding: 1em 1.5em;
    width: 100%;
    color: $textColor;
    text-decoration: none;
  }

  .table-of-contents > li a:hover {
    background-color: $grey;
  }

  .table-of-contents > li > a {
    margin-top: 1em;
    font-weight: 500;
  }

  .table-of-contents > li ul li a {
    padding-left: 2.5em;
  }
</style>
