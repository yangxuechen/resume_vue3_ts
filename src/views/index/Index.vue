<template>
  <div class="sys-web-index">
    <div class="sys-web-index-main">
      <div
        v-for="item in datalist"
        class="item-box"
        @click="toResumeDetail(item)"
      >
        <!-- <img :src="item" class="item-img" /> -->
        <MinResume :data="item"></MinResume>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import resumeImgUrl1 from "../../assets/resume-temp/temp-01.png";
import resumeImgUrl2 from "../../assets/resume-temp/temp-02.png";
import resumeImgUrl3 from "../../assets/resume-temp/temp-03.png";
import resumeImgUrl4 from "../../assets/resume-temp/temp-04.png";
import resumeImgUrl5 from "../../assets/resume-temp/temp-05.png";
import { ref } from "vue";
import MinResume from "../../components/layout/MinResume.vue";
import { useRouter } from "vue-router";

interface MinResumeData {
  imgUrl: string;
  desc: string;
  name: string;
}

const datalist = ref<MinResumeData[]>([
  { imgUrl: resumeImgUrl1, desc: "", name: "resume-01" },
  { imgUrl: resumeImgUrl2, desc: "", name: "resume-02" },
  { imgUrl: resumeImgUrl3, desc: "", name: "resume-03" },
  { imgUrl: resumeImgUrl4, desc: "", name: "resume-04" },
  { imgUrl: resumeImgUrl5, desc: "", name: "resume-05" },
  { imgUrl: resumeImgUrl5, desc: "", name: "resume-06" },
]);

const route = useRouter();

/**
 * 方法
 */

const toResumeDetail = (item: MinResumeData) => {
  route.push({ path: "/resumeEdit/", query: { name: item.name } });
};
</script>

<style lang="less" scoped>
.sys-web-index {
  width: 100%;
  padding: 50px 25px;

  .sys-web-index-main {
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    .item-box {
      width: 260px;
      height: 380px;
      padding: 25px;
      .item-img {
        width: 260px;
        height: 380px;
        border-radius: 15px;
      }
    }
  }
}
</style>
