<template>
  <div class="info-box">
    <!-- <div class="title">
      <div style="display: flex; align-items: center; width: 120px">
        <PushpinOutlined :style="{ fontSize: '20px', color: 'black' }" />
        <input type="text" class="input_title_bgWhite" v-model="title" />
      </div>
      <div class="btn-box">
        <MinusSquareOutlined @click="deleteSkill" />
        <PlusSquareOutlined @click="addSkill" />
      </div>
    </div> -->

    <TitleB
      title="基础技能"
      iconName="tool"
      backgroundColor="#fff"
      :backgroundColorChange="false"
      borderColor="black"
      font-size="14px"
      :show-tool="true"
      :showDelete="false"
      :show-set="false"
      size="small"
      color="black"
      @btnClick="onBtnClick"
    ></TitleB>
    <div v-for="(record, index) in skilllist">
      <div class="skill-box">
        <div>
          <input
            class="input_dash"
            v-model="record.skill"
            @change="updateStore"
            style="width: 5rem"
          />
        </div>
        <div>
          <input
            class="input_dash"
            v-model="record.degreeDesc"
            @change="updateStore"
            style="text-align: right; width: 5rem"
          />
        </div>
      </div>
      <div class="progress-box">
        <a-progress
          :percent="record.degree"
          :show-info="false"
          strokeColor="#9e9494"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// interface Skill {
//   skill: string;
//   value: string;
//   process: number;
// }
</script>
<script lang="ts" setup>
import {
  PlusSquareOutlined,
  PushpinOutlined,
  MinusSquareOutlined,
} from "@ant-design/icons-vue";
import { message } from "ant-design-vue";
import { computed, reactive, ref } from "vue";
import { useStore } from "vuex";
import { Skill, UserInfo } from "../../views/UserInfo";
import TitleB from "../base/title/TitleB.vue";

const store = useStore();
const title = ref<string>("技能特长");

console.log(store.state.user.userInfo.skillList, "skilllist");

const skilllist = reactive<Skill[]>(store.state.user.userInfo.skillList);

const bgColor = computed(() => store.state.app.themeColor);

const addSkill = () => {
  if (skilllist.length > 10) {
    message.warning("最多允许添加10条记录");
    return;
  }
  skilllist.push({ skill: "javascript", degreeDesc: "良好", degree: "50" });
  updateStore();
  message.success("添加成功");
};

const deleteSkill = () => {
  if (skilllist.length == 1) {
    message.warning("至少需要一条数据");
    return;
  }
  skilllist.pop();
  updateStore();
  message.success("删除成功");
};

const onBtnClick = (btnname: String) => {
  if (btnname == "add") addSkill();
  else deleteSkill();
};
/**
 * 输入框发生改变，立即更新store数据
 */
const updateStore = () => {
  const tempUser: UserInfo = store.state.user.userInfo;
  tempUser.skillList = skilllist;
  store.commit("user/setUserInfo", tempUser);
};
</script>

<style lang="less" scoped>
.info-box {
  width: 100%;
  padding: 15px;
  margin: 15px auto;
  color: white;
  background-color: v-bind(bgColor);
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
