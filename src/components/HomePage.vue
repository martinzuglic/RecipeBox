<template>
  <div class="hello">
    <section class="section">
      <h1>Welcome to Recipe Box!</h1>
      <p>Create and add your favourite recipes to your personal box.</p>
      <div class="buttons">
        <b-button
          type="button is-dark is-large"
          @click="isCardModalActive = true"
        >
          Sign up
        </b-button>
        <b-button
          type="button is-light is-large"
          @click="isComponentModalActive = true"
        >
          Login
        </b-button>
      </div>
      <b-modal
        custom-class="modal"
        v-model="isCardModalActive"
        has-modal-card
        trap-focus
        aria-role="dialog"
        aria-modal
      >
        <template>
          <Register />
        </template>
      </b-modal>
      <b-modal
        custom-class="modal"
        v-model="isComponentModalActive"
        has-modal-card
        trap-focus
        aria-role="dialog"
        aria-modal
      >
        <template>
          <Login />
        </template>
      </b-modal>
    </section>
    <Footer />
  </div>
</template>

<script>
import Footer from "./Footer.vue";
import Login from "./Login.vue";
import Register from "./Register.vue";

export default {
  name: "HomePage",
  data() {
    return {
      isComponentModalActive: false,
      isCardModalActive: false,
    };
  },
  components: {
    Footer,
    Login,
    Register,
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
