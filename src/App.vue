<template>
  <div id="app">
    <AddRecipes />
  </div>
</template>

<script>
import AddRecipes from "./components/AddRecipes.vue";

export default {
  name: "App",
  components: {
    AddRecipes,
  },
  data() {
    return {};
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
