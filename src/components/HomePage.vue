<template>
  <div class="hello">
    <section class="section">
      <h1>Welcome to Recipe Box!</h1>
      <p>Search, create and add recipes to your personal box.</p>
      <div class="buttons">
        <b-button type="is-dark is-large">Sign up</b-button>
        <b-button type="is-light is-large">Log in</b-button>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Footer from "./Footer.vue";

export default {
  name: "HomePage",
  components: {
    Footer,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section {
  background-image: url("../assets/background1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 800px;
}

.hello h1 {
  text-align: center;
  font-size: 60px;
  color: #292929;
  padding-top: 100px;
  font-style: italic;
  font-weight: bold;
}

.hello p {
  text-align: center;
  font-size: 30px;
  color: #292929;
}

.hello .buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 45px;
  margin-right: 10px;
}
</style>
