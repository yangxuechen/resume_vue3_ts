<template>
  <div class="contrainer-header">
    <div class="leftBox">
      <img src="../../assets/icons8-elephant-80.png" class="logo" />
      <h2>大象简历</h2>
    </div>
    <div class="rightBox">
      <h3 class="item" @click="onClick_1">模版中心</h3>
      <h3 class="item" @click="onClick_2">我的简历</h3>
    </div>
  </div>
</template>

<script lang="ts" setup>
import route from "../../router";

const onClick_2 = () => {
  route.push({ path: "/mineResume" });
};
const onClick_1 = () => {
  route.push({ path: "/resumeTemplate" });
};
</script>

<style lang="less" scoped>
.contrainer-header {
  width: 100%;
  height: 50px;
  background-color: #93c8f3;
  display: flex;
  position: fixed;
  top: 0;
  padding-left: 25px;
  padding-right: 25px;
  line-height: 50px;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: #00000021;
  border-bottom-style: solid;
  z-index: 100;
  //    padding: 15px;

  .leftBox {
    width: auto;
    height: 100%;
    display: flex;

    .logo {
      transform: rotateY(180deg);
    }
    img {
      margin: 5px;
      width: 40px;
      height: 40px;
      cursor: pointer;
    }

    h2 {
      margin-left: 15px;
      cursor: pointer;
    }
  }

  .rightBox {
    display: flex;
    padding-right: 50px;
    .item {
      padding-left: 15px;
      padding-right: 15px;
      cursor: pointer;
    }
  }
}
</style>
