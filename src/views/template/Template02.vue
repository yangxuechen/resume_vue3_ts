<template>
  <div class="temp2-box">
    <div class="temp2-box-head">
      <AvatarTop></AvatarTop>
    </div>
    <div class="temp2-box-body">
      <div class="left-box"><PersonInfo></PersonInfo></div>
      <div class="right-box"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Avatar from "../../components/layout/Avatar.vue";
import AvatarTop from "../../components/base/avatar/AvatarTop.vue";
import PersonInfo from "../../components/layout/PersonInfo.vue";
</script>

<style lang="less" scoped>
.temp2-box {
  width: 100%;
  min-height: 1086px;
  display: flex;
  flex-direction: column;

  .temp2-box-head {
    height: 200px;
    // background-color: var(--rs-bgcolor-1);
    // color: white;
  }

  .temp2-box-body {
    min-height: calc(1086px - 200px);
    display: flex;
    flex-direction: row-reverse;

    .left-box {
      width: 250px;
      min-height: calc(100% - 200px);
      background-color: #dededd;
    }

    .right-box {
      flex-grow: 1;
    }
  }
}
</style>
