<template>
  <div class="page">
    <div class="column" id="login">
      <b-field label="Username" :label-position="labelPosition">
        <b-input type="username"></b-input>
      </b-field>

      <b-field label="Password" :label-position="labelPosition">
        <b-input type="password"></b-input>
      </b-field>
      <b-field>
        <b-input type="password" placeholder="Repeat password"></b-input>
      </b-field>

      <b-field id="post">
        <p class="control">
          <b-button>Sign up</b-button>
        </p>
      </b-field>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",

  data() {
    return {
      labelPosition: "inside",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#login {
  padding: 40px;
  width: 500px;
}
</style>
