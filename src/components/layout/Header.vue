<template>
  <div class="head-box">
    <div class="contrainer-header">
      <div class="leftBox" @click="toIndex">
        <img src="../../assets/icons8-elephant-80.png" class="logo" />
        <h2>大象简历</h2>
      </div>
      <div class="rightBox">
        <div class="item" @click="onClick_3">使用教程</div>
        <div class="item" @click="onClick_1">模版中心</div>
        <div class="item" @click="onClick_2">隐私政策</div>
        <div class="item" @click="onClick_2">联系我们</div>
      </div>
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

const onClick_3 = () => {
  route.push({ path: "/recruitment" });
};
const toIndex = () => {
  route.push({ path: "/" });
};
</script>

<style lang="less" scoped>
.head-box {
  width: 100%;
  height: 80px;
  // background-image: url(../../assets/bg-bg1.png);
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  z-index: 999;
}
.contrainer-header {
  width: 90%;
  height: 50px;
  // background-color: #93c8f3;
  display: flex;
  margin: auto;
  padding-left: 25px;
  padding-right: 25px;
  line-height: 50px;
  justify-content: space-between;
  // border: 1px #fff solid;
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(88px);
  border-radius: 10px;
  box-shadow: 0px 0px 14px #629cad, 0px 0px 22px #bad3e9;
  // background-image: linear-gradient(
  //   to bottom right,
  //   #6cd7e7,
  //   #5fe4dd,
  //   #6eeec8,
  //   #94f6aa,
  //   #c4f98b,
  //   #f9f871
  // );

  //    padding: 15px;

  .leftBox {
    width: auto;
    height: 100%;
    display: flex;
    cursor: pointer;
    // backdrop-filter: blur(8px);
    .logo {
      transform: rotateY(180deg);
      z-index: 9999;
    }
    img {
      margin: 5px;
      width: 40px;
      height: 40px;
    }

    h2 {
      margin-left: 15px;
    }
  }

  .rightBox {
    display: flex;
    padding-right: 50px;
    .item {
      padding-left: 15px;
      padding-right: 15px;
      cursor: pointer;
      font-size: 1rem;
      font-weight: bold;
    }
  }
}
</style>
