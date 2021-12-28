<template>
  <div class="person-work-box">
    <rs-card>
      <template v-slot:content>
        <WorkExperience></WorkExperience>
      </template>
      <template v-slot:footer>
        <div>
          <div>组件数据使用store中的用户信息。</div>
          <div>组件名: WorkExperience</div>
          <div>组件地址: components/layout/WorkExperience.vue</div>
        </div>
      </template>
    </rs-card>

    <rs-card style="margin-top: 50px;">
      <template v-slot:content>
        <WorkExperise></WorkExperise>
      </template>
      <template v-slot:footer>
        <div>
          <div>组件数据使用store中的用户信息。</div>
          <div>组件名: WorkExperience</div>
          <div>组件地址: components/layout/WorkExperience.vue</div>
        </div>
      </template>
    </rs-card>
  </div>
</template>

<script lang="ts" setup>
import RsCard from "../../../components/base/card/RsCard.vue";

import WorkExperience from "../../../components/layout/WorkExperience.vue";
import WorkExperise from "../../../components/base/work/WorkExperise.vue";
</script>

<style lang="less" scoped>
.person-work-box {
  width: 100%;
  padding: 25px;
}
</style>
