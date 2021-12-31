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

    <rs-card>
      <template v-slot:content>
        <TitleB></TitleB>
      </template>
      <template v-slot:footer>
        <div>
          <div>组件数据使用store中的用户信息。</div>
          <div>组件名: TitleB</div>
          <div>组件地址: /components/base/title/TitleB.vue</div>
        </div>
      </template>
    </rs-card>

    <rs-card>
      <template v-slot:content>
        <rs-icon iconType="icon-heart-fill"></rs-icon>
        <!-- <TitleC></TitleC> -->
      </template>
      <template v-slot:footer>
        <div>
          <div>组件数据使用store中的用户信息。</div>
          <div>组件名: TitleC</div>
          <div>组件地址: /components/base/title/TitleC.vue</div>
        </div>
      </template>
    </rs-card>
  </div>
</template>

<script lang="ts" setup>
import TitleA from "../../../components/base/title/TitleA.vue";
import RsCard from "../../../components/base/card/RsCard.vue";
import TitleB from "../../../components/base/title/TitleB.vue";
import TitleC from "../../../components/base/title/TitleC.vue";
import RsIcon from "../../../components/base/icon/RsIcon.vue";
</script>

<style lang="less" scoped>
.title-page {
  width: 100%;
  padding: 25px;
}
</style>
