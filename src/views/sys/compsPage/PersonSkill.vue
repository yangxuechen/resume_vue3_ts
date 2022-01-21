<template>
  <div class="person-skill-box">
    <rs-card title="基础技能-组件1">
      <template v-slot:content>
        <Skill1 class="skill-box"></Skill1>
      </template>
      <template v-slot:footer>
        <div>
          <div>组件数据使用store中的用户信息。</div>
          <div>组件名: Skill1</div>
          <div>组件地址: components/layout/Skill1.vue</div>
        </div>
      </template>
    </rs-card>
  </div>
</template>

<script lang="ts" setup>
import RsCard from "../../../components/base/card/RsCard.vue";
import Skill1 from "../../../components/layout/Skill1.vue";
</script>

<style lang="less" scoped>
.person-skill-box {
  width: 100%;
  padding: 25px;

  .skill-box {
    width: 300px;
    background-color: var(--rs-bgcolor-1);
  }
}
</style>
