<script>
import Home from "./Home.vue";
import List from "./List.vue";
import TheList from "./components/TheList.vue";
import About from "./About.vue";
import { useTheme } from "vuetify";

const routes = {
  "/": Home,
  "/list": List,
  "/about": About,
};

export default {
  setup() {
    const theme = useTheme();

    return {
      theme,
      toggleTheme: () =>
        (theme.global.name.value = theme.global.current.value.dark
          ? "light"
          : "dark"),
    };
  },
  data() {
    return {
      currentPath: window.location.hash,
    };
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || "/"] || NotFound;
    },
  },
  mounted() {
    window.addEventListener("hashchange", () => {
      this.currentPath = window.location.hash;
    });
  },
  methods: {
    fetchList() {
      const Url = `https://api.fbi.gov/wanted/v1/list?page=${this.page}`;
      fetch(Url)
        .then((response) => response.json())
        .then((data) => {
          this.listData = data;
          this.wantedList = null;
          this.wantedListData = [];
          this.numberOfPages = data.total / 20 + 1;
        });
    },

    search() {},
  },
};
</script>

<template>
  <main>
    <v-app>
      <v-app-bar title="FBI MOST WANTED LIST" color="black">
        <div class="searchBox">
          <v-text-field label="Search" max-width="200"></v-text-field>
        </div>
        <v-btn icon="mdi-magnify" @click="search"></v-btn>
        <v-btn href="#/">Home</v-btn>
        <v-btn href="#/list">The List</v-btn>
        <v-btn href="#/about">About</v-btn>
        <v-btn @click="toggleTheme" icon="mdi-animation"></v-btn>
      </v-app-bar>

      <v-main>
        <component :is="currentView" />
      </v-main>
    </v-app>
  </main>
</template>

<style scoped>
.searchBox {
  width: 250px;
}
</style>