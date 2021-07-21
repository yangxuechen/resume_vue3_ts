<template>
  <div class="toop-tip-box">
    <!-- <a-button goust>切换主题</a-button> -->

    <div class="color-box">
      <div class="item-color-1 item" @click="changTheme('#062743')"></div>
      <div class="item-color-2 item" @click="changTheme('#efb788')"></div>
      <div class="item-color-3 item" @click="changTheme('#7194a9')"></div>
      <div class="item-color-4 item" @click="changTheme('#795548')"></div>
      <div class="item-color-5 item" @click="changTheme('#907cb3')"></div>
      <!-- <div class="item" @click="changTheme('#907cb3')">
       
      </div> -->
    </div>
    <div class="drapdown-icon" @click="openPanel">
      <MoreOutlined
        style="font-size: 20px; color: black"
        class="menu-btn"
        title="更多"
      />
    </div>
  </div>
  <MoreColor v-if="visible"></MoreColor>
</template>

<script lang="ts" setup>
import { defineEmit, reactive } from "@vue/runtime-core";
import { DownOutlined, MoreOutlined } from "@ant-design/icons-vue";
import MoreColor from "../../components/base/MoreColor.vue";
import { ref } from "vue";

const visible = ref<boolean>(false);
const emit = defineEmit({
  changeTheme: (val: string) => Boolean,
  "update:visible": (value: boolean) => Boolean,
});
const changTheme = (color: string) => {
  document.body.style.setProperty("--rs-bgcolor-1", color);
  emit("changeTheme", color);
};

const openPanel = () => {
  console.log("点击");

  visible.value = true;
};
</script>

<style lang="less" scoped>
button {
  width: 100px;
}

.item-color-1 {
  background-color: #25252a;
}
.item-color-2 {
  background-color: #efb788;
}
.item-color-3 {
  background-color: #7194a9;
}
.item-color-4 {
  background-color: #795548;
}
.item-color-5 {
  background-color: #a487d8;
}
.item-color-6 {
  background-color: #4caf50;
}

.item {
  width: 16px;
  height: 16px;
}

.item:hover {
  // width: 17px;
  // height: 17px;
  border: 1px rgb(14, 11, 11) solid;
  cursor: pointer;
}

.toop-tip-box {
  display: flex;
  width: 230px;
  height: 40px;
  position: fixed;
  border: 1px #e2e1e1 solid;
  right: 50px;
  top: 100px;
  align-items: center;
  .color-box {
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .drapdown-icon {
    width: 30px;
    display: flex;
    align-items: center;
  }

  .drapdown-icon:hover {
    cursor: pointer;
  }
  .menu-btn {
    background-color: transparent;

    &:hover {
      background-color: #928f8a33;
    }
  }
}
</style>
