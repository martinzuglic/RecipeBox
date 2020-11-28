<template>
  <b-navbar centered spaced type="is-dark">
    <template slot="start">
      <b-navbar-item href="/"> Home </b-navbar-item>
      <b-navbar-item href="/recipebox"> My box </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: "Navigation",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  height: 120px;
  margin-bottom: 3px;
  background-color: #292929;
  font-size: 40px;
  padding: 15px;
}
</style>
