<template>
  <div class="person-base-box">
    <rs-card title="基础信息-组件1">
      <template v-slot:content>
        <PersonInfo class="person-info-1"></PersonInfo>
      </template>
      <template v-slot:footer>
        <div>
          <div>组件数据使用store中的用户信息。</div>
          <div>组件名: PersonInfo</div>
          <div>组件地址: components/layout/PersonInfo.vue</div>
        </div>
      </template>
    </rs-card>

    <rs-card title="基础信息-组件2" style="margin-top: 50px">
      <template v-slot:content>
        <BaseInfoRight class="person-info-2"></BaseInfoRight>
      </template>
      <template v-slot:footer>
        <div>
          <div>组件数据使用store中的用户信息。</div>
          <div>组件名: BaseInfoRight</div>
          <div>组件地址: components/base/baseinfo/BaseInfoRight.vue</div>
        </div>
      </template>
    </rs-card>
  </div>
</template>

<script lang="ts" setup>
import RsCard from "../../../components/base/card/RsCard.vue";
import PersonInfo from "../../../components/layout/PersonInfo.vue";
import BaseInfoRight from "../../../components/base/baseinfo/BaseInfoRight.vue";
</script>

<style lang="less" scoped>
.person-base-box {
  width: 100%;
  padding: 25px;
  .person-info-1 {
    background-color: var(--rs-bgcolor-1);
    width: 300px;
  }

  .person-info-2 {
    background-color: #f7f7f4;
    width: 300px;
  }
}
</style>
