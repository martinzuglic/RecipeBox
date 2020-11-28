<template>
  <div class="page">
    <!--<section class="section">
      <div class="columns" id="addrecipe">
        <div class="column">
          empty column 
        </div>-->

    <div class="column" id="recipe">
      <b-field label="Name of recipe" :label-position="labelPosition">
        <b-input v-model="name"></b-input>
      </b-field>

      <b-field label="Time needed" :label-position="labelPosition">
        <b-input v-model="time"></b-input>
      </b-field>

      <b-field label="Skill required" :label-position="labelPosition">
        <b-select placeholder="" v-model="skill">
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Expert">Expert</option>
        </b-select>
      </b-field>

      <b-field label="Ingredients" :label-position="labelPosition">
        <b-input type="textarea" v-model="ingredients"></b-input>
      </b-field>

      <b-field label="Instructions" :label-position="labelPosition">
        <b-input type="textarea" v-model="instructions"></b-input>
      </b-field>

      <b-field id="post">
        <p class="control">
          <b-button
            @click="
              addRecipe();
              $parent.close();
            "
            type="is-light"
            >Add recipe to box</b-button
          >
        </p>
      </b-field>
    </div>
    <!--
        <div class="column">
          empty column 
        </div>
      </div>
    </section>
    <Footer />
    -->
  </div>
</template>

<script>
/*import Footer from "./Footer.vue";*/

export default {
  name: "AddRecipes",
  /* components: {
    Footer,
  },*/
  data() {
    return {
      name: "",
      time: "",
      skill: "",
      ingredients: "",
      instructions: "",
      labelPosition: "inside",
      file: null,
    };
  },
  methods: {
    addRecipe() {
      this.$emit(
        "updated",
        this.name,
        this.time,
        this.skill,
        this.ingredients,
        this.instructions
      );
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*section {
  background-image: url("../assets/background3.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 1000px;
}*/

#addrecipe {
  margin-top: 10px;
}

#recipe {
  color: white;
  width: 700px;
}
</style>
