<template>
  <nav>
    <router-link to="/"></router-link> 
    <router-link to="/inventory"></router-link>
    <router-link to="/pending"></router-link>
    <router-link to="/transactions"></router-link>
    <router-link to="/logout"></router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
