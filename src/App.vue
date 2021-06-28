<template>
  <div id="app" class="container-fluid mt-3">
    <div class="jumbotron">
      <h1>Trabajo Práctico Nº 6</h1>
      <br>
      <NavBar />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from './componentes/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.jumbotron {
  padding: 32px !important;
  background-color:gainsboro;
}
</style>
