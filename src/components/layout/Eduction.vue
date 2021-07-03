<template>
  <div class="info-box">
    <div class="title">
      <div style="display: flex; align-items: center; gap: 10px">
        <ReadFilled :style="{ fontSize: '24px', color: 'white' }" />
        <input type="text" class="input_title" v-model="title" />
      </div>
      <div style="padding-right: 25px" class="btn-box">
        <!-- <a-button type="link" @click="addEdu" class="btn"
          >添加教育经历</a-button
        > -->
        <MinusSquareOutlined @click="deleteEdu" />
        <PlusSquareOutlined @click="addEdu" />
      </div>
    </div>

    <div class="intension-desc">
      <div v-for="item in state.dateset" class="item-box">
        <div class="item">
          <input class="input_dash" :value="item.date" style="width: 120px" />
        </div>
        <div class="item">
          <input class="input_dash" :value="item.school" style="width: 120px" />
        </div>
        <div class="item">
          <input class="input_dash" :value="item.major" />
        </div>
        <div class="item">
          <input
            class="input_dash"
            :value="item.eduction"
            style="width: 50px"
          />
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
  ReadFilled,
  PushpinOutlined,
  PlusSquareOutlined,
  MinusSquareOutlined,
} from "@ant-design/icons-vue";
import { message } from "ant-design-vue";
import { reactive, ref } from "vue";
const title = ref<string>("教育经历");
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

const deleteEdu = () => {
  if (state.dateset.length == 1) {
    message.warning("至少需要一条记录");
  } else {
    state.dateset.pop();
  }
};
</script>

<style lang="less" scoped>
.info-box {
  width: 100%;
  padding: 0 15px;
  margin: 15px auto;
  color: white;
  .title {
    background-color: var(--rs-bgcolor-1);
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
  padding: 25px 10px 10px 10px;

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
  color: var(--rs-bgcolor-1);
}

.btn:hover {
  color: azure;
  transform: scale(1.1);
}
.btn-box {
  color: var(--rs-bgcolor-1);
  display: flex;
  font-size: 30px;
  gap: 10px;
}

.btn-box:hover {
  color: white;
  cursor: pointer;
}
</style>
