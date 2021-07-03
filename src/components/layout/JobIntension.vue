<template>
  <div class="info-box">
    <div class="title">
      <CompassFilled :style="{ fontSize: '24px', color: 'white' }" />
      <input type="text" class="input_title" v-model="title" />
    </div>

    <div class="intension-desc">
      <div class="item">
        <UserOutlined :style="{ fontSize: '20px', color: 'black' }" />
        <input class="input_dash" value="前端工程师" />
      </div>
      <div class="item">
        <ShopFilled :style="{ fontSize: '20px', color: 'black' }" />
        <input class="input_dash" value="成都" />
      </div>
      <!-- <div class="item">
        <TransactionOutlined :style="{ fontSize: '20px', color: 'black' }" />
        <input class="input_dash" value="15k" />
      </div> -->
      <div class="item">
        <HourglassFilled :style="{ fontSize: '20px', color: 'black' }" />
        <input class="input_dash" value="一周内" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
interface Skill {
  key: string;
  value: string;
  process: number;
}
</script>
<script lang="ts" setup>
import {
  UserOutlined,
  HourglassFilled,
  ShopFilled,
  CompassFilled,
} from "@ant-design/icons-vue";
import { reactive, ref } from "vue";
const title = ref<string>("求职意向");
const skilllist = reactive<Skill[]>([
  { key: "javascript", value: "良好", process: 80 },
  { key: "html5", value: "良好", process: 50 },
  { key: "css3", value: "良好", process: 60 },
  { key: "node.js", value: "良好", process: 50 },
  { key: "vue3.js", value: "良好", process: 50 },
  { key: "java", value: "良好", process: 50 },
]);
</script>

<style lang="less" scoped>
.info-box {
  width: 100%;
  padding: 0 15px;
  margin: 15px auto;
  color: white;

  .title {
    //   background-color: #25262a;
    background-color: var(--rs-bgcolor-1);
    width: 100%;
    height: 40px;
    //   line-height: 30px;
    border-bottom-left-radius: 50px;
    border-top-left-radius: 50px;
    padding-left: 10px;
    display: flex;
    align-items: center;
    gap: 10px;

    h4 {
      margin: 0 0 0 5px;
      color: white;
    }
  }

  .info {
    width: 100%;
    height: 23px;
    //   padding-left: 10px;
    display: flex;
    align-items: center;
    padding-top: 7px;
    margin: 0;
    .info-desc {
      padding-left: 10px;
    }
  }

  .skill-box {
    display: flex;
    justify-content: space-between;
    padding: 5px 0;
  }
}

.input_dash {
  max-width: 80px;
  height: 20px;
  border-color: white;
  //   padding: 5px;
  border-width: 0ch;
  text-align: left;
  border-color: white;
  border-width: 1px;
  border-style: dotted;
  background-color: white;
  color: black;
}
.input_dash:focus {
  background: none;
  outline: none;
  border: 0px;
  //    padding: 5px;
  border-color: tomato;
  border-width: 1px;
  border-style: dotted;
}

.progress-box {
  padding: 0;
  margin-top: -10px;
}

.intension-desc {
  display: flex;
  justify-content: space-around;
  padding: 20px 1px;
  .item {
    padding: 15px;
    display: flex;
    align-items: center;
  }
}
</style>
