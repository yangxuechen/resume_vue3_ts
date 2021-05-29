<template>
  <div class="contrainer-resume">
      <h3>
        前端开发
      </h3>
      <div class="box">
          <div class="resume-box">
            <MinResume></MinResume>
          </div>
          <div class="resume-box">
            <MinResume></MinResume>
          </div>
          <div class="resume-box">
            <MinResume></MinResume>
          </div>
          <div class="resume-box">
            <MinResume></MinResume>
          </div>
          <div class="resume-box">
            <MinResume></MinResume>
          </div>
          <div class="resume-box">
            <MinResume></MinResume>
          </div>
          <div class="resume-box">
            <MinResume></MinResume>
          </div>
          
      </div>
  </div>
</template>

<script lang="ts" setup>
  import MinResume from '../../components/layout/MinResume.vue'
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