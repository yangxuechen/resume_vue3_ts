<template>
  <div class="person-edu-box">
    <rs-card title="教育背景-组件1">
      <template v-slot:content>
        <Eduction></Eduction>
      </template>
      <template v-slot:footer>
        <div>
          <div>组件数据使用store中的用户信息。</div>
          <div>组件名: Eduction</div>
          <div>组件地址: components/layout/Eduction.vue</div>
        </div>
      </template>
    </rs-card>

    <rs-card title="教育背景-组件2" style="margin-top: 50px">
      <template v-slot:content>
        <EductionA></EductionA>
      </template>
      <template v-slot:footer>
        <div>
          <div>组件数据使用store中的用户信息。</div>
          <div>组件名: Eduction</div>
          <div>组件地址: components/layout/Eduction.vue</div>
        </div>
      </template>
    </rs-card>
  </div>
</template>

<script lang="ts" setup>
import RsCard from "../../../components/base/card/RsCard.vue";
import Eduction from "../../../components/layout/Eduction.vue";
import EductionA from "../../../components/base/edu/EductionA.vue";
</script>

<style lang="less" scoped>
.person-edu-box {
  width: 100%;
  padding: 25px;
}
</style>
