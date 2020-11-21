<template>
  <div class="page">
    <section class="section">
      <div class="columns" id="addrecipe">
        <div class="column">
          <!-- empty column -->
        </div>

        <div class="column" id="recipe">
          <b-field label="Name of recipe" :label-position="labelPosition">
            <b-input minlength="5" maxlength="50"></b-input>
          </b-field>

          <b-field label="Time needed" :label-position="labelPosition">
            <b-input minlength="2" maxlength="50"></b-input>
          </b-field>

          <b-field label="Skill required" :label-position="labelPosition">
            <b-select placeholder="">
              <option value="1">Beginner</option>
              <option value="2">Intermediate</option>
              <option value="2">Expert</option>
            </b-select>
          </b-field>

          <b-field label="Ingredients" :label-position="labelPosition">
            <b-input minlength="2" maxlength="100" type="textarea"></b-input>
          </b-field>

          <b-field label="Instructions" :label-position="labelPosition">
            <b-input minlength="5" maxlength="100" type="textarea"></b-input>
          </b-field>

          <b-field id="post">
            <p class="control">
              <b-button type="is-dark">Add recipe to box</b-button>
            </p>
          </b-field>
        </div>

        <div class="column">
          <!-- empty column -->
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Footer from "./Footer.vue";

export default {
  name: "AddRecipes",
  components: {
    Footer,
  },
  data() {
    return {
      labelPosition: "inside",
      file: null,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section {
  background-image: url("../assets/background3.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 1000px;
}

#addrecipe {
  margin-top: 10px;
}

#recipe {
  color: white;
}
</style>
