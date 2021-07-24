<template>
  <div>
    <div class="openSource">
      <a
        href="https://github.com/yangxuechen/resume_vue3_ts.git"
        target="_blank"
        ><GithubOutlined style="font-size: 20px; cursor: pointer"
      /></a>
      <div>遵循 Apache-2.0 开源协议</div>
    </div>

    <div class="foot-box">
      <div class="name">©️2021 吃西瓜要吐米米</div>
      <a href="https://beian.miit.gov.cn/" target="_blank"
        >蜀ICP备2021017342号-1</a
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { GithubOutlined } from "@ant-design/icons-vue";
</script>
<style lang="less" scoped>
.foot-box {
  width: 100%;
  height: 50px;
  padding: 15px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
}

a {
  color: black;
}

.name {
  color: black;
}

.openSource {
  display: flex;
  justify-content: center;
  gap: 15px;
}
</style>
