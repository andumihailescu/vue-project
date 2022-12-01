<script setup>
import TheList from './components/TheList.vue'
import NavigationBar from './components/NavigationBar.vue'
</script>

<template>
  <main>
    <v-app>
      <NavigationBar />
      <v-main>
        <TheList />
      </v-main>
    </v-app>
  </main>
</template>

<style scoped>

</style>
