<template>
  <div class="info-box">
    <div class="title">
      <div style="display: flex; align-items: center; width: 120px">
        <PushpinOutlined :style="{ fontSize: '20px', color: 'black' }" />
        <input type="text" class="input_title_bgWhite" v-model="title" />
      </div>
      <div class="btn-box">
        <MinusSquareOutlined @click="deleteSkill" />
        <PlusSquareOutlined @click="addSkill" />
      </div>
    </div>
    <div v-for="record in skilllist">
      <div class="skill-box">
        <div>
          <input class="input_dash" :value="record.key" style="width: 5rem" />
        </div>
        <div>
          <input
            class="input_dash"
            :value="record.value"
            style="text-align: right; width: 5rem"
          />
        </div>
      </div>
      <div class="progress-box">
        <a-progress
          :percent="record.process"
          :show-info="false"
          strokeColor="#9e9494"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
interface Skill {
  key: string;
  value: string;
  process: number;
}
</script>
<script lang="ts" setup>
import {
  PlusSquareOutlined,
  PushpinOutlined,
  MinusSquareOutlined,
} from "@ant-design/icons-vue";
import { message } from "ant-design-vue";
import { reactive, ref } from "vue";
const title = ref<string>("技能特长");
const skilllist = reactive<Skill[]>([
  { key: "javascript", value: "良好", process: 80 },
  { key: "html5", value: "良好", process: 50 },
  { key: "css3", value: "良好", process: 60 },
  { key: "node.js", value: "良好", process: 50 },
  { key: "vue3.js", value: "良好", process: 50 },
  { key: "java", value: "良好", process: 50 },
]);

const addSkill = () => {
  if (skilllist.length > 10) {
    message.warning("最多允许添加10条记录");
    return;
  }
  skilllist.push({ key: "aa", value: "ss", process: 50 });
  message.success("添加成功");
};

const deleteSkill = () => {
  if (skilllist.length == 1) {
    message.warning("至少需要一条数据");
    return;
  }
  skilllist.pop();
  message.success("删除成功");
};
</script>

<style lang="less" scoped>
.info-box {
  width: 100%;
  padding: 0 15px;
  margin: 15px auto;
  color: white;
  .title {
    background-color: white;
    width: 100%;
    height: 30px;
    //   line-height: 30px;
    border-bottom-left-radius: 50px;
    border-top-left-radius: 50px;
    padding-left: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h4 {
      margin: 0 0 0 5px;
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

.progress-box {
  padding: 0;
  margin-top: -10px;
}
.btn-box {
  color: white;
  display: flex;
  font-size: 30px;
  gap: 10px;
}

.btn-box:hover {
  color: var(--rs-bgcolor-1);
  cursor: pointer;
}
</style>
