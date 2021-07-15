<template>
  <div class="box">
    <Header></Header>
    <!-- <div>
          <a-button type="primary" @click="onClick">确认</a-button>
        </div> -->
    <div class="mainContrainer">
      <router-view></router-view>
    </div>
  
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { message } from "ant-design-vue";
import Header from "../components/layout/Header.vue";
import Footer1 from "../components/layout/Footer.vue";
const msg = ref<string>("hello");

const onClick = () => {
  message.info("按钮被点击");
};
</script>

<style lang="less" scoped>
//  .contrainer{
//      background-color: aquamarine;
//      width:300px;
//      height: 300px;

//      & >div:first-child{
//         color: brown;
//       font-size: larger;
//      }
//  }

.box {
  background-image: linear-gradient(to right top, #fdffff, #9fceda, #d6d7f9);
}
.mainContrainer {
  // margin-top: 50px;
  padding-top: 80px;
  // background-image: linear-gradient(
  //   to right top,
  //   #6cd7e7,
  //   #5fe4dd,
  //   #6eeec8,
  //   #94f6aa,
  //   #c4f98b,
  //   #f9f871
  // );
  width: 100%;
  margin: auto;
  // border: 1px black solid;
  // backdrop-filter: blur(2px);
}
</style>
