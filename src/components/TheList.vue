<script>
export default {
  data() {
    return {
      list: [],
      page: 1,
      pageSize: 2,
      listCount: 0,
      historyList: [],
    };
  },

  created() {
    this.initPage();
    this.updatePage(this.page);
  },

  methods: {
    async fetchData() {
      const response = await fetch(`https://api.fbi.gov/wanted/v1/list?page=1`);
      const data = await response.json();
      let pageCount = Math.ceil(data.total / 20) + 1;

      for (let i = 1; i <= pageCount - 5; i++) {
        const responseAll = await fetch(
          `https://api.fbi.gov/wanted/v1/list?page=${i}`
        );
        const dataAll = await responseAll.json();
        dataAll.items.forEach((element) => {
          this.list.push(element);
        });
      }
    },
    initPage: async function () {
      await this.fetchData();
      this.listCount = this.list.length;
      if (this.listCount < this.pageSize) {
        this.historyList = this.list;
      } else {
        this.historyList = this.list.slice(0, this.pageSize);
      }
    },
    updatePage: function (pageIndex) {
      let start = (pageIndex - 1) * this.pageSize;
      let end = pageIndex * this.pageSize;

      this.historyList = this.list.slice(start, end);
      this.page = pageIndex;
    },
  },
  computed: {
    pages() {
      if (this.pageSize == null || this.listCount == null) return 0;
      return Math.ceil(this.listCount / this.pageSize);
    },
  },
};
</script>

<template>
  <v-container v-if="list">
    <v-row>
      <v-col v-for="(person, index) in list" :key="index" cols="2.5">
        <v-img
          :src="person.images[0].thumb"
          width="200"
          height="200"
          cover
        ></v-img>
        <p class="names">{{ person.title }}</p>
      </v-col>
    </v-row>
    <v-pagination
      v-model="page"
      :length="pages"
      :total-visible="5"
      @input="updatePage"
    ></v-pagination>
  </v-container>
</template>

<style scoped>
.names {
  font-size: small;
  font-family: sans-serif;
  font-weight: bold;
}
.v-text-field {
  width: 100px;
}
</style>