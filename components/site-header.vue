<template>
  <header>
    <div class="container">
      <h1>Stage bij de Voorhoede <logo /></h1>
    
      <nav>
        <ul>
          <li><nuxt-link to="/plan">Stageplan</nuxt-link></li>
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
      font-size: 2.5em;
      margin-bottom: 1em;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;

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

    ul {
      li {
        display: inline-block;
        margin-right: 1em;

        &:last-of-type {
          margin-right: 0;
        }

        a {
          text-decoration: none;
          color: #000;

          &.nuxt-link-active {
            text-decoration: underline;
          }
        }
      }
    }
  }
</style>
