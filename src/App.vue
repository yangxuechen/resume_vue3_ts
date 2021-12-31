<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <router-view />
</template>

<script lang="ts" setup>
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import { useRouter } from "vue-router";
import Test from "./components/Test.vue";
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();
window.addEventListener("beforeunload", () => {
  localStorage.setItem("userInfo", JSON.stringify(store.state.user.userInfo));
});
</script>

<style lang="less">
//@import "@/assets/style/main.less";
@import url("./assets/style/main.less");
@import url("./assets/style/svgIcon.less");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
