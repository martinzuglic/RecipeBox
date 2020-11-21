<template>
  <div>
    <section class="section">
      <h1>Moji recepti:</h1>
    </section>
    <Footer />
  </div>
</template>

<script>
import Footer from "./Footer.vue";

export default {
  name: "RecipeBox",
  components: {
    Footer,
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section {
  background-image: url("../assets/background2.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 800px;
}

.section h1 {
  text-align: center;
  font-size: 30px;
  color: #292929;
}
</style>
