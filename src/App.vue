<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <Skills/> -->

    <nav>
      <router-link to="/">Home</router-link>
      <!-- <router-link to="/about">About</router-link> -->
      <router-link to="/coded">VueJS CODED</router-link>
    </nav>

    <router-view/>

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Skills from './components/Skills.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld,
    Skills
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

nav{
  padding: 20px 20px 20px 0px;
}

nav a{
  padding: 10px;
  text-decoration: none;
  background: rgb(113, 136, 136);
  border-radius: 2px;
  color: rgb(238, 238, 241);
  font-weight: 600;
  margin-right: 15px;
}

a:active{
  background-color: blanchedalmond;
  color: black;
}
</style>
