<script>
export default {
    data() {
        return {
            listData: null,
            wantedList: null,
            wantedListData: null,
            page: 1,
            numberOfPages: 0,
        };
    },

    created(){
        const Url=`https://api.fbi.gov/wanted/v1/list?page=${this.page}`
            fetch(Url)
            .then((response) => response.json())
            .then((data) => {
                this.listData = data;
                this.wantedList = null;
                this.wantedListData = [];
                this.numberOfPages = data.total / 20 + 1;
                
            })
    },

    methods: {
        fetchList() {
            const Url=`https://api.fbi.gov/wanted/v1/list?page=${this.page}`
            fetch(Url)
            .then(window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
            }))
            .then((response) => response.json())
            .then((data) => {
                this.listData = data;
                this.wantedList = null;
                this.wantedListData = [];
                this.numberOfPages = data.total / 20 + 1;
                
            })
        },
        search(){

        }
    },
};
</script>

<template>

    <v-container v-if="listData">
        <v-row>
            <v-col v-for="(person, index) in listData.items" :key="index" cols="2.5">
                <v-img :src="person.images[0].thumb" width="200" height="200" cover></v-img>
                <p class="names">{{ person.title }}</p>
            </v-col>
        </v-row>
        <v-pagination v-model="page" :length="numberOfPages" :total-visible="5" @update:model-value="fetchList"></v-pagination>
    </v-container>
    
</template>

<style scoped>
.names{
    font-size: small;
    font-family: sans-serif;
    font-weight: bold;
}
.v-text-field{
      width: 100px;
}
</style>