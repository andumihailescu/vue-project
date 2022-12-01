<script>
export default{
    
}
</script>

<template>
    <v-app-bar title="FBI MOST WANTED LIST" color="black">
        <v-btn icon="mdi-magnify"></v-btn>
        <v-btn>Home</v-btn>
        <v-btn @click="fetchList">The List</v-btn>
        <v-btn>About</v-btn>
    </v-app-bar>    
</template>

<style scoped>

</style>