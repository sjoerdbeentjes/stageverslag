<template>
  <header>
    <div class="container">
      <h1><nuxt-link to="/">Stage bij de Voorhoede</nuxt-link><logo /></h1>
    
      <nav>
        <ul>
          <li><nuxt-link exact to="/">Home</nuxt-link></li>
          <li><nuxt-link to="/plan">Stageplan</nuxt-link></li>
          <li><nuxt-link to="/report">Stageverslag</nuxt-link></li>
          <li><nuxt-link to="/log">Log</nuxt-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import logo from '~/components/logo';

export default {
  components: {
    logo
  }
}
</script>

<style lang="scss">
  header {
    .container {
      padding: 2em;
    }

    h1 {
      font-size: 3em;
      margin-bottom: 1em;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;

      a {
        text-decoration: none;
      }

      svg {
        margin-left: 0.5em;
      }
    }

    @media print {
      display: none;
    }
  }

  nav {
    text-align: center;
    font-size: 1.2rem;

    ul {
      li {
        display: inline-block;
        margin-right: 1em;

        &:last-of-type {
          margin-right: 0;
        }

        a {
          text-decoration: none;

          &.nuxt-link-active {
            text-decoration: underline;
          }
        }
      }
    }
  }
</style>
