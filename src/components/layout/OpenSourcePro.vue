<template>
  <div class="info-box">
    <div class="title">
      <div style="display: flex; align-items: center">
        <PushpinOutlined :style="{ fontSize: '30px', color: 'white' }" />
        <h4>开源项目</h4>
      </div>
      <div style="padding-right: 25px">
        <a-button type="link" @click="addEdu" class="btn"
          >添加教育经历</a-button
        >
      </div>
    </div>

    <div class="open-source-box">
      <div class="open-source-item">
        <div class="point"></div>
        <div style="padding: 15px; flex-grow: 1">
          <a-textarea
            v-model:value="value"
            placeholder="Autosize height based on content lines"
            auto-size
            class="myinput"
          />
          <!-- 开源项目1<a href="https://www.baidu.com">链接地址</a>) -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
interface Edu {
  date: string;
  school: string;
  major: string;
  eduction: string;
}
</script>
<script lang="ts" setup>
import {
  UserOutlined,
  ManOutlined,
  PaperClipOutlined,
  UsergroupAddOutlined,
  SolutionOutlined,
  HourglassFilled,
  ShopFilled,
  TransactionOutlined,
  PushpinOutlined,
} from "@ant-design/icons-vue";
import { message } from "ant-design-vue";
import { reactive, ref } from "vue";

const state = reactive({
  dateset: [
    {
      date: "2016~2020",
      school: "行知大学",
      major: "软件工程",
      eduction: "本科",
    },
  ] as Edu[],
});

const addEdu = () => {
  if (state.dateset.length > 2) {
    message.warning("最多允许添加3条记录");
  } else {
    state.dateset.push({
      date: "2016~2020",
      school: "行知大学",
      major: "软件工程",
      eduction: "硕士",
    });
    message.success("添加成功");
  }
};

const value = ref<string>("开源项目1");
</script>

<style lang="less" scoped>
.info-box {
  width: 100%;
  padding: 0 15px;
  margin: 15px auto;
  color: white;
  .title {
    background-color: #25262a;
    width: 100%;
    height: 40px;
    //   line-height: 30px;
    border-bottom-left-radius: 50px;
    border-top-left-radius: 50px;
    padding-left: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h4 {
      margin: 0 0 0 5px;
      color: white;
    }
  }

  .input_dash {
    width: 90px;
    height: 20px;
    border-color: white;
    //   padding: 5px;
    border-width: 0ch;
    text-align: left;
    border-color: white;
    border-width: 1px;
    border-style: dotted;
    background-color: white;
    color: black;
  }
  .input_dash:focus {
    background: none;
    outline: none;
    border: 0px;
    //    padding: 5px;
    border-color: tomato;
    border-width: 1px;
    border-style: dotted;
  }

  .btn {
    color: #25272a;
  }

  .btn:hover {
    color: azure;
    transform: scale(1.1);
  }

  .open-source-box {
    padding: 15px;
  }

  .point {
    width: 10px;
    height: 10px;
    background-color: black;
    border-radius: 5px;
    padding: 5px;
  }
  .open-source-item {
    display: flex;
    color: black;
    align-items: center;
  }
}

.myinput {
  border: none;
}
</style>
