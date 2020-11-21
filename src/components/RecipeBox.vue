<template>
  <div class="hello">
    <section class="section">
      <h2>Sve pasmine</h2>
      <!-- Koristimo v-model koji nudi nešto što nazivamo two-way binding, odnosno vežemo varijablu u javascriptu koja se naziva ime s ovim input elementom, što znači da ovaj input može mijenjati vrijednost te varijable ali će isto tako i stalno motriti vrijednost te varijable ako bi se ona promijenila negdje drugdje -->
      <input
        type="text"
        v-model="ime"
        placeholder="Unesite ime pasmine ili samo dio"
      />
      <ul class="dogs">
        <!-- Klasična petlja u Vue-u koja prolazi kroz sve što array pod nazivom filtrirano vraća. Skrolajte na dno popisa pa ćete vidit kako izgleda sam array filtrirano odnosno ono što vraća. -->
        <li v-for="(pasmina, index) in filtrirano" :key="index">
          <router-link :to="`/pasmine/${pasmina}`">{{ pasmina }}</router-link>
        </li>
      </ul>
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

  data() {
    return {
      pasmine: [],
      ime: "",
    };
  },

  async mounted() {
    let response = await fetch("https://dog.ceo/api/breeds/list/all");

    if (response.ok) {
      this.pasmine = await response.json();
    } else {
      alert("HTTP-Error: " + response.status);
    }
  },

  computed: {
    filtrirano() {
      let filtered = [];
      if (this.pasmine.message)
        filtered = Object.keys(this.pasmine.message).filter((item) =>
          item.includes(this.ime)
        );

      return filtered;
    },
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
div {
  text-align: left;
}

ul {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 20px;
  margin: 0;
  padding: 0;
}

li {
  display: block;
}

input {
  padding: 10px;
  margin-bottom: 20px;
  width: 100%;
}
</style>
