<template>
  <div class="more-box">
    <div class="head" style="font-size: 20px; color: black" @click="close">
      <RightOutlined />
    </div>
    1111
  </div>
</template>

<script lang="ts" setup>
import { RightOutlined } from "@ant-design/icons-vue";
</script>

<style lang="less" scoped>
.more-box {
  width: 300px;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  border: 1px black solid;
  z-index: 991;
  background-color: white;

  .head {
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: left;
    align-items: center;
    padding-left: 15px;
  }
}
</style>
