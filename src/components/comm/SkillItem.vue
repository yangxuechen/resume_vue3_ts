<template>
  <div class="skill-item-main-box">
    <div class="skill-box">
      <div>
        <input class="input_dash" v-model="skill" style="width: 5rem" />
      </div>
      <div>
        <input
          class="input_dash"
          v-model="skillObj.degreeDesc"
          style="text-align: right; width: 5rem"
        />
      </div>
    </div>
    <div class="progress-box">
      <a-progress
        :percent="skillObj.degree"
        :show-info="false"
        strokeColor="#9e9494"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps } from "vue";
import { Skill } from "../../views/UserInfo";

const props = defineProps({
  skillObj: { type: Skill, default: {} },
});

const skill = computed(() => props.skillObj.skill);
</script>

<style lang="less" scoped>
.skill-item-main-box {
  width: 100%;
}
.skill-box {
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
}

.progress-box {
  padding: 0;
  margin-top: -10px;
}
</style>
