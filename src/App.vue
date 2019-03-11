<template>
  <div id="app">
    <blogheader></blogheader>
    <!-- <Add-blog></Add-blog> -->
    <!-- <show-blog></show-blog> -->
    <router-view></router-view>
  </div>
</template>

<script>
  // import AddBlog from "./components/AddBlog";
  // import showBlog from "./components/showBlog";
  import  blogheader from "./components/BlogHeader";
  export default {
    name: "App",
     components: {
    //   AddBlog,
    //   showBlog,
    blogheader
     }
  };
</script>

<style>
  
</style>
