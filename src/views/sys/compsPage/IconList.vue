<template>
  <div class="icon-list-box">
    <rs-card title="图表库">
      <template v-slot:content>
        <div class="rs-icon-box">
          <rs-icon
            :iconType="icon"
            class="icon-item"
            v-for="icon in iconlist"
          ></rs-icon>
        </div>
      </template>
      <template v-slot:footer>
        <div>
          <div>组件数据使用store中的用户信息。</div>
          <div>组件名: Avatar</div>
          <div></div>
        </div>
      </template>
    </rs-card>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import RsIcon from "../../../components/base/icon/RsIcon.vue";
import RsCard from "../../../components/base/card/RsCard.vue";

const iconlist = reactive<string[]>([
  "icon-heart-fill",
  "icon-Youtube-fill",
  "icon-152error40401",
  "icon-fire",
  "icon-like",
  "icon-trophy",
  "icon-file-ppt",
  "icon-solution",
  "icon-team",
  "icon-user",
  "icon-edit-square",
  "icon-eye",
  "icon-setting",
  "icon-message",
  "icon-transaction",
  "icon-jingyan",
  "icon-dianhua",
  "icon-nianling",
  "icon-24gl-telephone2",
  "icon-youxiang2",
  "icon-youxiang1",
  "icon-gongzuojingyan2",
  "icon-gongzuojingyan1",
  "icon-gongzuojingyan",
  "icon-youxiang",
  "icon-huchudianhua",
]);
</script>

<style lang="less" scoped>
.icon-list-box {
  width: 100%;
  padding: 25px;
  .rs-icon-box {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .icon-item {
    padding: 15px;
    font-size: 30px;
  }
}
</style>
