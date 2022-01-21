<template>
  <div class="input-page">
    <rs-card title="图表库">
      <template v-slot:content>
        <div class="rs-icon-box">
          <RsInput
            showIcon
            showTitle
            title="年龄"
            value="age"
            width="100px"
            background-color="#fff"
            border-color="black"
            style="font-size: 16px; color: black"
            @updateVal="updateAge"
          ></RsInput>
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
import { message } from "ant-design-vue";
import RsInput from "../../../components/base/input/RsInput.vue";
import RsCard from "../../../components/base/card/RsCard.vue";

const updateAge = (val: string) => {
  message.info("val change");
};
</script>

<style lang="less" scoped>
.input-page {
  width: 100%;
}
</style>
