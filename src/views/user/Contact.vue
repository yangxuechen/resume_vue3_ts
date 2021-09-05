<template>
  <div class="p-p-box">
    <div class="p-p-content">
      <div class="p-p-title-box">
        <img src="../../assets/icons8-contacts-480.png" style="width: 50px" />
        <h2 class="title">联系我们</h2>
      </div>
      <div class="content">
        <div class="contact-box">
          <a-tooltip>
            <template #title>邮箱:1324688478@qq.com</template>
            <MailFilled style="font-size: 50px" />
          </a-tooltip>
          <a-tooltip>
            <template #title>点击跳转github仓库</template>
            <GithubOutlined style="font-size: 50px" @click="toGithub" />
          </a-tooltip>

          <a-tooltip style="background-color: transparent">
            <template #title
              ><img
                :src="img"
                style="width: 130px; height: 160px; position: relative"
            /></template>
            <QqOutlined style="font-size: 50px" />
          </a-tooltip>
        </div>
        <!-- <div class="contact-box">
          <div>邮箱:1324688478@qq.com</div>
          <div>点击跳转</div>
          <div style="width: 80px">
            <img :src="img" style="width: 100px; height: 100px" />
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "@vue/reactivity";
import { GithubOutlined, MailFilled, QqOutlined } from "@ant-design/icons-vue";
import img from "../../assets/qqImg.png";
console.log();

const onMousemove = (e: Event) => {
  console.log(e);
};

const toGithub = () => {
  // window.location.href = "https://github.com/yangxuechen/resume_vue3_ts";
  window.open("https://github.com/yangxuechen/resume_vue3_ts");
};
</script>

<style lang="less" scoped>
.p-p-box {
  width: 100%;
  min-height: calc(100vh - 80px);
  padding: 50px 0;
}

.p-p-content {
  width: 80%;
  min-height: calc(100vh - 180px);
  margin: auto;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #bebebe;
  border-radius: 45px;
  padding: 30px;
  font-size: 16px;
  text-align: left;
  .p-p-title-box {
    display: flex;
    align-items: center;

    h2 {
      padding-left: 30px;
    }
  }

  .content {
    padding-top: 50px;
    width: 100%;
    height: calc(100vh - 360px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .item {
    padding-top: 50px;
  }
}

li {
  padding: 10px 0;
}

.contact-box {
  width: 400px;
  display: flex;
  justify-content: space-around;
}

:deep(.ant-tooltip-inner) {
  background-color: aqua;
}
</style>
