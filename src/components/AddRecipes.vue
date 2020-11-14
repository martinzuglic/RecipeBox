<template>
  <div class="page">
    <div id="header">
      <header class="header">
        <div class="content has-text-centered">
          <h1>RecipeBox</h1>
        </div>
      </header>
    </div>

    <div class="container">
      <b-navbar centered>
        <template slot="start">
          <b-navbar-item href="#"> Home </b-navbar-item>
          <b-navbar-item href="#"> Post Recipes </b-navbar-item>
          <b-navbar-item href="#">
            My Recipe Box
            <img src="../assets/boxicon.png" />
          </b-navbar-item>
        </template>

        <template slot="start">
          <b-input placeholder="Search recipes..." type="search" icon="magnify">
          </b-input>
          <p class="control">
            <b-button type="is-success" outlined>Search</b-button>
          </p>
        </template>
      </b-navbar>
    </div>

    <section class="section">
      <div class="columns" id="addrecipe">
        <div class="column">
          <!-- empty column -->
        </div>

        <div class="column" id="recipe">
          <b-field label="Name of recipe" :label-position="labelPosition">
            <b-input maxlength="50"></b-input>
          </b-field>

          <b-field label="Time needed" :label-position="labelPosition">
            <b-input maxlength="50"></b-input>
          </b-field>

          <b-field label="Skill required" :label-position="labelPosition">
            <b-select placeholder="">
              <option value="1">Beginner</option>
              <option value="2">Intermediate</option>
              <option value="2">Expert</option>
            </b-select>
          </b-field>

          <b-field label="Ingredients" :label-position="labelPosition">
            <b-input maxlength="100" type="textarea"></b-input>
          </b-field>

          <b-field label="Instructions" :label-position="labelPosition">
            <b-input maxlength="100" type="textarea"></b-input>
          </b-field>

          <b-field class="file is-primary" :class="{ 'has-name': !!file }">
            <b-upload v-model="file" class="file-label">
              <span class="file-cta">
                <span class="file-label">Click to add image</span>
              </span>
              <span class="file-name" v-if="file">
                {{ file.name }}
              </span>
            </b-upload>
          </b-field>

          <b-field id="post">
            <p class="control">
              <b-button type="is-dark" outlined>Post recipe</b-button>
            </p>
          </b-field>
        </div>

        <div class="column">
          <!-- empty column -->
        </div>
      </div>
    </section>

    <div id="footer">
      <footer class="footer">
        <div class="content has-text-centered">
          <p>RecipeBox</p>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
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
  background-image: url("../assets/cookbook.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

#addrecipe {
  margin-top: 10px;
}

#recipe {
  color: white;
}

header {
  background-image: url("../assets/header.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 3px;
  height: 180px;
}

header h1 {
  font-size: 40px;
  font-family: "Times New Roman", Times, serif;
  color: #effaf3;
}

footer {
  background-image: url("../assets/footer.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 180px;
  color: white;
  font-size: 40px;
  font-family: "Times New Roman", Times, serif;
}

#navigation button {
  margin-left: 10px;
}

#navigation {
  background-color: darksalmon;
}
</style>
