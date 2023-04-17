<template>
  <div id="app">
    <h1>Calculator</h1>
    <router-view />
  </div>
</template>

<script>
import axios from './http/client'

export default {
  name: 'App',
  mounted() {
    console.log(axios)
  },
  data() {
    return {
      name: process.env.API
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
