<template>
  <div id="app">
    <img src="./assets/logo.png">
    <VueStudy/>
  </div>
</template>

<script>
// 引入VueStudy组件
import VueStudy from "./components/vue-study";

export default {
  name: "App",
  // 注册组件
  components: {
    VueStudy
  }
};
</script>

<style>
/* 创建脚手架时自带的CSS样式，无需理会 */
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 500px;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
}
</style>
