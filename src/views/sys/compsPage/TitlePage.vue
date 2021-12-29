<template>
  <div class="title-page">
    <rs-card>
      <template v-slot:content>
        <TitleA></TitleA>
      </template>
      <template v-slot:footer>
        <div>
          <div>组件数据使用store中的用户信息。</div>
          <div>组件名: TitleA</div>
          <div>组件地址: /components/base/title/TitleA.vue</div>
        </div>
      </template>
    </rs-card>
  </div>
</template>

<script lang="ts" setup>
import TitleA from "../../../components/base/title/TitleA.vue";
</script>

<style lang="less" scoped>
.title-page {
  width: 100%;
  padding: 25px;
}
</style>
