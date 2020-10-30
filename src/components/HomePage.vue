<template>
  <div class="page">
    <div id="header">
      <header class="header">
        <div class="content has-text-centered">
          <img src="../assets/foodbox.png" />
          <h1>RecipeBox</h1>
        </div>
        <div class="buttons">
          <a class="button is-success">
            <strong>Sign up</strong>
          </a>
          <a class="button is-success is-light"> Log in </a>
        </div>
      </header>
    </div>

    <div id="navigation">
      <b-navbar centered>
        <template slot="start">
          <b-navbar-item href="HomePage.vue"> Home </b-navbar-item>
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
      labelPosition: "on-border",
      file: null,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#recipe {
  width: 30%;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-bottom: 10px;
}

#recipe #post {
  margin-top: 40px;
}
header img {
  height: 100px;
  margin-bottom: -50px;
}

header {
  background-color: #48c774;
  padding-top: 10px;
  padding-bottom: 10px;
}

header h1 {
  font-size: 40px;
  font-family: "Times New Roman", Times, serif;
  color: #414241;
}

footer {
  width: 100%;
  margin-top: 20px;
  color: #414241;
  background-color: #effaf3;
  font-size: 20px;
  font-family: "Times New Roman", Times, serif;
}

#navigation {
  margin-top: 20px;
}

#navigation button {
  margin-left: 10px;
}
</style>
