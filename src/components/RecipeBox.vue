<template>
  <div>
    <section class="section">
      <div class="buttons">
        <button
          class="button is-dark is-large"
          @click="isComponentModalActive = true"
        >
          Add recipe
        </button>
      </div>
      <h1>My recipes:</h1>
      <div class="container">
        <b-table :data="data">
          <b-table-column label="Name of recipe" centered v-slot="name">
            <b-button type="is-text">{{ name.row.name }}</b-button>
            <!-- Need on click show whole recipe -->
          </b-table-column>
          <b-table-column label="Time needed" v-slot="time">
            {{ time.row.time }}
          </b-table-column>
          <b-table-column label="Skill required" v-slot="skill">
            {{ skill.row.skill }}
          </b-table-column>
        </b-table>
        <!-- :columns="columns" /for table without button on name of the recipe-->
      </div>

      <b-modal
        custom-class="modal"
        v-model="isComponentModalActive"
        has-modal-card
        trap-focus
        aria-role="dialog"
        aria-modal
      >
        <template>
          <AddRecipes @updated="handleUpdate" />
        </template>
      </b-modal>
    </section>
    <Footer />
  </div>
</template>

<script>
import Footer from "./Footer.vue";
import AddRecipes from "./AddRecipes.vue";

export default {
  name: "RecipeBox",
  methods: {
    handleUpdate(name, time, skill, ingredients, instructions) {
      this.data.unshift({
        name,
        time,
        skill,
        ingredients,
        instructions,
      });
    },
  },
  data() {
    return {
      isComponentModalActive: false,
      data: [],
      /*columns: [
        {
          field: "name",
          label: "Name of recipe",
          centered: true,
        },
        {
          field: "time",
          label: "Time needed",
          centered: true,
        },
        {
          field: "skill",
          label: "Skill required",
          centered: true,
        },
      ],*/
    };
  },
  components: {
    Footer,
    AddRecipes,
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
  font-size: 40px;
  font-weight: bold;
  color: #292929;
}

.container {
  width: 700px;
  padding: 20px;
}
.section .buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-right: 10px;
}
</style>
