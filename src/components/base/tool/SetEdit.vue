<template>
  <div class="set-edit-box">
    <a-switch
      checked-children="开"
      un-checked-children="关"
      v-model:checked="checked"
      @change="onChange"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useStore } from "vuex";
const store = useStore();
const checked = ref<boolean>(true);

const onChange = (checked: boolean) => {
  store.commit("app/setCanEdit", checked);
};
</script>

<style lang="less" scoped>
.set-edit-box {
  position: fixed;
  right: 50px;
  top: 100px;
}
</style>
