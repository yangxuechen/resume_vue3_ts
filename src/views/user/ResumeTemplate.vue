<template>
  <div class="contrainer-resume">
    <div v-for="record in resumedata">
      <h3>
        {{record.title}}
      </h3>
      <div class="box">
          <div class="resume-box" v-for=" data in record.datalist" @click="toResumeEdit(data.name)">
            <MinResume :data="data"></MinResume>
          </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import MinResume from '../../components/layout/MinResume.vue'
  import route from '../../router'
  interface MinResumeData{
        imgUrl:string;
        desc:string;
        name:string;
      }
interface ResumeData{
  title:string;
  datalist:MinResumeData[];
}
  const dataset:MinResumeData[] =[
    {imgUrl:'src/assets/resume-temp/resume-tem1.png', desc:'前端简历（清新版）',name:'resume-前端-1'},
    {imgUrl:'src/assets/resume-temp/resume-tem1.png', desc:'前端简历（热火版）',name:'resume-前端-2'},
    {imgUrl:'src/assets/resume-temp/resume-tem1.png', desc:'前端简历（简介版）',name:'resume-前端-3'},
    // {imgUrl:'src/assets/resume-temp/resume-tem1.png', desc:'前端简历（商务版）'},
    // {imgUrl:'src/assets/resume-temp/resume-tem1.png', desc:'前端简历（清新版）'},
    // {imgUrl:'src/assets/resume-temp/resume-tem1.png', desc:'前端简历（清新版）'},
    // {imgUrl:'src/assets/resume-temp/resume-tem1.png', desc:'前端简历（清新版）'},
  ];

  const dataset2:MinResumeData[] =[
    {imgUrl:'src/assets/resume-temp/resume-tem1.png', desc:'运营简历（清新版）',name:'resume-前端-1'},
    {imgUrl:'src/assets/resume-temp/resume-tem1.png', desc:'运营简历（热火版）',name:'resume-前端-1'},
    {imgUrl:'src/assets/resume-temp/resume-tem1.png', desc:'运营简历（简介版）',name:'resume-前端-1'},
    {imgUrl:'src/assets/resume-temp/resume-tem1.png', desc:'运营简历（热火版）',name:'resume-前端-1'},
    {imgUrl:'src/assets/resume-temp/resume-tem1.png', desc:'运营简历（简介版）',name:'resume-前端-1'},
    {imgUrl:'src/assets/resume-temp/resume-tem1.png', desc:'运营简历（热火版）',name:'resume-前端-1'},
    {imgUrl:'src/assets/resume-temp/resume-tem1.png', desc:'运营简历（简介版）',name:'resume-前端-1'},
  ];

  const resumedata:ResumeData[] =[
    {title:'前端开发',datalist:dataset},
    {title:'运营设计',datalist:dataset2},
  ]

  const toResumeEdit =(resumeTitle:string)=>{
    route.push({path:'/resumeEdit',query:{name:resumeTitle}})
  }
</script>

<style lang="less" scoped>

  .contrainer-resume{
    width: auto;
    height: auto;
    text-align: center;
    padding: 0 30px;

    h3{
      padding-top: 25px;
      text-align: left;
    }

    .box{
      width: 100%;
      height: auto;
      // background-color: chocolate;
      display: flex;
      justify-content: start;
      flex-wrap: wrap;
      .resume-box{
        margin: 15px 15px;
        width: 200px;
        height: 270px;
        // background-color: cornflowerblue;
      }
    }

  }
</style>