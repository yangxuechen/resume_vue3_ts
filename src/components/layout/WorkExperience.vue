<template>
  <div class="info-box">
    <div class="title">
      <div style="display: flex; align-items: center">
        <PushpinOutlined :style="{ fontSize: '30px', color: 'white' }" />
        <h4>工作经历</h4>
      </div>
      <div style="padding-right: 25px">
        <a-button type="link" @click="addEdu" class="btn"
          >添加教育经历</a-button
        >
      </div>
    </div>

    <div class="intension-desc" v-for="item in state.dateset">
      <div class="item-box">
        <div class="item">
          <input class="input_dash" :value="item.date" style="width: 120px" />
        </div>
        <div class="item">
          <input
            class="input_dash"
            :value="item.company"
            style="width: 120px"
          />
        </div>
        <div class="item">
          <input class="input_dash" :value="item.position" />
        </div>
      </div>
    </div>

    <div class="exprience-box" v-for="desc in desclist">
      <div class="exprience-box-item">
        <div class="point"></div>

        <div class="text-box">
          {{ desc }}
          <!-- <a-textarea :value="desc" autosize> </a-textarea> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
interface WorkExperience {
  date: string;
  company: string;
  position: string;
  desc: string[];
}
</script>
<script lang="ts" setup>
import { PushpinOutlined } from "@ant-design/icons-vue";
import { message } from "ant-design-vue";
import { reactive, ref } from "vue";

const desclist = reactive<string[]>([
  "负责相关产品的需求以及前端程序的实现，提供合理的前端架构。改进和优化开发工具、开发流程、和开发框架。",
  " Web前端功能设计、开发和实现，与后台工程师协作，完成数据交互、动态展现;",
  " 从视觉和易用性角度，为网站设计提供改进建议，为网站/客户端的页面提供持续优化方案;",
]);
desclist.push("111");
const state = reactive({
  dateset: [
    {
      date: "2016~2020",
      company: "XX科技有限公司",
      position: "前端开发",
      desc: [
        "负责相关产品的需求以及前端程序的实现，提供合理的前端架构。改进和优化开发工具、开发流程、和开发框架。",
        " Web前端功能设计、开发和实现，与后台工程师协作，完成数据交互、动态展现;",
        " 从视觉和易用性角度，为网站设计提供改进建议，为网站/客户端的页面提供持续优化方案;",
      ],
    },
  ] as WorkExperience[],
});

const addEdu = () => {};
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

  .info {
    width: 100%;
    height: 23px;
    //   padding-left: 10px;
    display: flex;
    align-items: center;
    padding-top: 7px;
    margin: 0;
    .info-desc {
      padding-left: 10px;
    }
  }

  .skill-box {
    display: flex;
    justify-content: space-between;
    padding: 5px 0;
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

.progress-box {
  padding: 0;
  margin-top: -10px;
}

.intension-desc {
  padding: 25px 10px 5px 10px;

  .item-box {
    display: flex;
    justify-content: space-around;
    padding: 5px 10px;
  }
  .item {
    padding: 5px;
    display: flex;
    align-items: center;
  }
}

.btn {
  color: #25272a;
}

.btn:hover {
  color: azure;
  transform: scale(1.1);
}

.exprience-box {
  color: black;
  padding: 15px 15px 0 15px;

  .exprience-box-item {
    display: flex;
    align-items: center;

    .text-box {
      padding-left: 25px;
      flex-grow: 1;
    }
  }
}

.point {
  width: 10px;
  height: 10px;
  background-color: black;
  border-radius: 5px;
  padding: 5px;
}
</style>
