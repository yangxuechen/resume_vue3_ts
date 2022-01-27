<template>
  <div class="left-side-tool-box">
    <div class="content-box">
      <div class="icon-item" @click="exportPdf">
        <rs-svg-icon
          name="exportIcon"
          :showTool="false"
          :hoverEffect="false"
          color="black"
          width="15px"
        ></rs-svg-icon>
        <div>导出</div>
      </div>

      <div class="icon-item" @click="openAddModal">
        <rs-svg-icon
          name="add"
          :showTool="false"
          :hoverEffect="false"
          color="black"
          width="18px"
        ></rs-svg-icon>
        <div>添加</div>
      </div>

      <div class="icon-item" @click="previewPdf">
        <rs-svg-icon
          name="preview2"
          :showTool="false"
          :hoverEffect="false"
          color="black"
          width="18px"
        ></rs-svg-icon>
        <div>预览</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineEmit, ref } from "vue";

const emit = defineEmit({
  exportPdf: () => Boolean,
  openAddModal: () => Boolean,
  previewPdf: () => Boolean,
});

const exportPdf = () => {
  emit("exportPdf");
};

const openAddModal = () => {
  emit("openAddModal");
};

const previewPdf = () => {
  emit("previewPdf");
};
</script>

<style lang="less" scoped>
.left-side-tool-box {
  position: fixed;
  left: 50px;
  width: 70px;
  height: calc(100vh - 50px);

  display: flex;
  align-items: center;

  .content-box {
    width: 70px;
    height: 300px;
    background-color: aliceblue;
    border: 1px #e1e1f1 solid;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .icon-item {
      width: 55px;
      height: 55px;

      // padding: 10px 0;
      margin-top: 15px;
      // border: 1px black solid;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 12px;
    }

    .icon-item:hover {
      background-color: #53557847;
      cursor: pointer;
      border-radius: 5px;
      color: #fff;
    }
  }
}
</style>
