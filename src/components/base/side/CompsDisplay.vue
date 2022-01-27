<template>
  <div class="comps-display-box">
    <a-card>
      <div class="content-box">
        <div class="main-content">
          <slot></slot>
        </div>

        <div class="btn-box">
          <a-button type="primary">添加</a-button>
        </div>
      </div>
    </a-card>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped>
.comps-display-box {
  width: 100%;

  .content-box {
    width: 100%;
    display: flex;
    align-items: center;

    .main-content {
      flex: 1 1 auto;
      padding: 5px;
      margin-right: 15px;
      border: 1px black solid;
    }
    .btn-box {
      width: 50px;
    }
  }
}
</style>
