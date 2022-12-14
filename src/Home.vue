<script>

export default{
    data(){
        return{
            BackgroundImage: "https://wallpaperaccess.com/full/2831718.jpg",
        }
    }
}

</script>

<template>
  <div>
    <v-img :src="BackgroundImage" max-height="400" cover></v-img>
  </div>
  <div>
    <h1 class="homeTitle">MOST WANTED LIST</h1>
  </div>
</template>

<style scoped>
.homeTitle{
    font-size: 75px;
    text-align: center;
}
</style>