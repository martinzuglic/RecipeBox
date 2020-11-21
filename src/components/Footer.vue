<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>Recipe Box by Martin Žuglić</p>
      <p>
        <strong
          >This site is powered by
          <a href="https://www.netlify.com/">Netlify</a>.</strong
        >
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  background-color: #292929;
  width: 100%;
  height: 100px;
  font-size: 20px;
  font-family: "Times New Roman", Times, serif;
  margin-top: 3px;
}
</style>
