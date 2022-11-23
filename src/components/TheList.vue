<script>
export default {
    data() {
        return {
            listData: null,
            wantedList: null,
            wantedListData: null,
        };
    },

    methods: {
        fetchList() {
            fetch("https://api.fbi.gov/wanted/v1/list")
            .then((response) => response.json())
            .then((data) => {
                this.listData = data;
                this.wantedList = null;
                this.wantedListData = [];
            });
        },
        fetchAllList(listId, remaining) {
            const Url = ``;
        }
    },
};
</script>

<template>
    <h2>The List</h2>
    <button @click="fetchList">Show me the list</button>
    <div v-if="listData">
        <div v-for="(person, index) in listData.items" :key="index">
            <p>{{ person.title }}</p>
            <img :src="person.images[0].thumb" :alt="person.title"/>
        </div>
    </div>
</template>

<style scoped>

</style>