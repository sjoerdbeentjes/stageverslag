<template>
  <header>
    <div class="container">
      <h1>Stage bij de Voorhoede</h1>
    
      <nav>
        <ul>
          <li><nuxt-link exact to="/">Home</nuxt-link></li>
          <li><nuxt-link exact to="/log">Log</nuxt-link></li>
          <li><nuxt-link exact to="/report">Verslag</nuxt-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {

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
