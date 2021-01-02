<template>
  <body>
    <div id="app">
     <router-view></router-view>
    </div>
  </body>
</template>

<script>

export default {
  name: "App",

};
</script>

<style>
  *{
    box-sizing: border-box;
  }
  body{
    margin: 0;
    padding: 0;
  }

  a{
    color:rgb(100, 99, 102)
  }
</style>
