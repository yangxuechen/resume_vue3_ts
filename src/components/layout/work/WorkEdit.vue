<template>
  <div class="work-box">
    <div class="item-box">
      <div class="label">工作时间</div>
      <a-input></a-input>
    </div>
    <div class="item-box">
      <div class="label">工作单位</div>
      <a-input></a-input>
    </div>
    <div class="item-box">
      <div class="label">工作岗位</div>
      <a-input></a-input>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped>
.work-box {
  width: 100%;
  height: 100%;
  padding: 10px;
}

.item-box {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 7px 0;
}

.label {
  width: 100px;
}
</style>
