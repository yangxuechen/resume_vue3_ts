<template>
  <div class="baseinfo-box">
    <div class="title">
      <input type="text" v-model="title" class="input_1 info-title" />
    </div>
    <a-divider style="height: 2px; background-color: black; margin: 8px 0" />
    <div class="info">
      <div><ManOutlined /></div>
      <div class="info-desc"><input class="input_1 name" value="男" /></div>
    </div>
    <div class="info">
      <div><PaperClipOutlined /></div>
      <div class="info-desc"><input class="input_1 name" value="24" /></div>
    </div>
    <div class="info">
      <div><UsergroupAddOutlined /></div>
      <div class="info-desc"><input class="input_1 name" value="汉" /></div>
    </div>
    <div class="info">
      <div><SolutionOutlined /></div>
      <div class="info-desc">
        <input class="input_1 name" value="本科" />
      </div>
    </div>
    <div class="info">
      <div><HourglassOutlined /></div>
      <div class="info-desc"><input class="input_1 name" value="2年" /></div>
    </div>
    <div class="info">
      <div><PhoneOutlined /></div>
      <div class="info-desc">
        <input class="input_1 name" value="18328486111" />
      </div>
    </div>
    <div class="info">
      <div><MailOutlined /></div>
      <div class="info-desc">
        <input class="input_1 name" value="88888888@qq.com" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import {
  UserOutlined,
  ManOutlined,
  PaperClipOutlined,
  UsergroupAddOutlined,
  SolutionOutlined,
  HourglassOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons-vue";
const title = ref<string>("基本信息");
</script>
<style lang="less" scoped>
.baseinfo-box {
  width: 100%;
  padding: 15px;
}

.title {
  display: flex;
  justify-content: left;
}
.input_1 {
  background-color: #f7f7f4;
  width: auto;
  height: 20px;
  border-color: white;
  //   padding: 5px;
  border-width: 0ch;
  text-align: left;
  //  border-color: #25252a;
  border-color: #f7f7f4;
  border-width: 1px;
  border-style: dotted;
  //  background-color: #25252a;
  color: black;
}

.input_1:focus {
  background: none;
  outline: none;
  border: 0px;
  //    padding: 5px;
  border-color: tomato;
  border-width: 1px;
  border-style: dotted;
}

.info-title {
  height: 40px;
  font-size: 16px;
  font-weight: bolder;
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
</style>
