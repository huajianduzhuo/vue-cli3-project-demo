<template>
  <div id="nav">
    <router-link to="/inputtip">InputTip</router-link>
    <router-link to="/list">List</router-link>
  </div>
</template>
<style lang="scss" scoped>
#nav {
  padding: 30px;
  a {
    display: block;
    padding-top: 20px;
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
