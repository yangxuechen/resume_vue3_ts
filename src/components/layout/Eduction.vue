<template>
  <div class="info-box">
    <TitleB
      title="教育背景"
      iconName="education"
      :backgroundColorChange="true"
      borderColor="#fff"
      font-size="14px"
      :show-tool="true"
      :titleType="props.titleType"
      :size="titleSize"
      color="#fff"
      :style="{ width: titleWidth }"
      @btnClick="onBtnClick"
    ></TitleB>

    <div class="intension-desc">
      <div v-for="item in state" class="item-box">
        <div class="item">
          <input
            class="input_dash"
            v-model="item.time"
            @change="updateStore"
            style="width: 120px"
          />
        </div>
        <div class="item">
          <input
            class="input_dash"
            v-model="item.firstSchool"
            @change="updateStore"
            style="width: 120px"
          />
        </div>
        <div class="item">
          <input
            class="input_dash"
            @change="updateStore"
            v-model="item.firstMajor"
          />
        </div>
        <div class="item">
          <input
            class="input_dash"
            v-model="item.education"
            @change="updateStore"
            style="width: 50px"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts"></script>
<script lang="ts" setup>
import {
  ReadFilled,
  PushpinOutlined,
  PlusSquareOutlined,
  MinusSquareOutlined,
} from "@ant-design/icons-vue";
import { message } from "ant-design-vue";
import { defineComponent, defineEmit, defineProps, reactive, ref } from "vue";
import { useStore } from "vuex";
import { Education } from "../../views/UserInfo";
import TitleB from "../base/title/TitleB.vue";

const props = defineProps({
  titleType: { type: String, default: "title-01" },
  titleSize: { type: String, default: "normal" },
  titleWidth: { type: String, default: "100%" },
});
const emit = defineEmit({
  remove: (value: String) => Boolean,
});
const title = ref<string>("教育经历");

const store = useStore();
const state = reactive<Education[]>(store.state.user.userInfo.educationList);

console.log(store.state.app.themeColor, "color");

const addEdu = () => {
  if (state.length > 2) {
    message.warning("最多允许添加3条记录");
  } else {
    state.push({
      time: "2016~2020",
      firstSchool: "行知大学",
      firstMajor: "软件工程",
      education: "硕士",
      startTime: "2016",
      endTime: "2020",
      firstSchoolExperience: "于2016年就读于XX大学XXXX专业",
    });
    updateStore();
    message.success("添加成功");
  }
};

const deleteEdu = () => {
  if (state.length == 1) {
    message.warning("至少需要一条记录");
  } else {
    state.pop();
    updateStore();
    message.success("删除成功");
  }
};

const updateStore = () => {
  const tempUser = store.state.user.userInfo;
  tempUser.educationList = state;
  store.commit("user/setUserInfo", tempUser);
};

const onBtnClick = (val: string) => {
  if (val == "add") {
    addEdu();
  } else if (val == "delete") {
    deleteEdu();
  } else if (val == "remove") {
    emit("remove", "Education");
  }
};

</script>

<style lang="less" scoped>
.info-box {
  width: 100%;
  // padding: 0 15px;
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
