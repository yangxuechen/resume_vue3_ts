<template>
  <div class="temp2-box">
    <div class="temp2-box-head">
      <AvatarTop></AvatarTop>
    </div>
    <div class="temp2-box-body">
      <div class="left-box">
        <BaseInfoRight></BaseInfoRight>
        <Skill02 title="技能特长"></Skill02>
      </div>
      <div class="right-box">
        <panel :edit="edit" @changEditState="onClick">
          <EductionA :edit="edit"></EductionA>
          <WorkExperise></WorkExperise>
        </panel>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Avatar from "../../components/layout/Avatar.vue";
import AvatarTop from "../../components/base/avatar/AvatarTop.vue";
import PersonInfo from "../../components/layout/PersonInfo.vue";
import BaseInfoRight from "../../components/base/baseinfo/BaseInfoRight.vue";
import Skill02 from "../../components/base/skill/Skill02.vue";
import EductionA from "../../components/base/edu/EductionA.vue";
import Panel from "../../components/base/panel/Panel.vue";
import { ref, watch } from "vue";
import WorkExperise from "../../components/base/work/WorkExperise.vue";

const edit = ref<boolean>(false);

const onClick = (val: boolean) => {
  edit.value = val;
};
</script>

<style lang="less" scoped>
.temp2-box {
  width: 100%;
  min-height: 1086px;
  display: flex;
  flex-direction: column;

  .temp2-box-head {
    height: 200px;
    // background-color: var(--rs-bgcolor-1);
    // color: white;
  }

  .temp2-box-body {
    min-height: calc(1086px - 200px);
    display: flex;
    flex-direction: row-reverse;

    .left-box {
      width: 250px;
      min-height: calc(100% - 200px);
      background-color: #dededd;
    }

    .right-box {
      width: calc(100% - 250px);
    }
  }
}
</style>
