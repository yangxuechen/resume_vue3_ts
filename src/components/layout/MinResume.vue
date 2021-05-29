<template>
    <div class="minResume-box">
        <div @mouseenter="myHover" @mouseleave="leave">
          <img src="../../assets/resume-temp/resume-tem1.png" >
          <div>基础简历（清新版）</div>
        </div>
        <div class="hoverBox" :class="{show:show}">
          <a-button type="primary" size="small" >点击查看</a-button>
        </div>
    </div>
  </template>
  
  <script lang="ts" setup>
      import { message } from "ant-design-vue";
      import { ref } from "vue";
      const show = ref<boolean>(false);

      const myHover =()=>{
        // message.info('鼠标一上来')
        //show.value =true;
      }

      const leave = ()=>{
        // message.info('鼠标走远了');
       // show.value =false;
      }
  </script>
  
  <style lang="less" scoped>
  
     .minResume-box{
       width: 100%;
       height: auto;
       position: absolute;

       &>:first-child{
         width: 200px;

       
       }

       &>:first-child:hover{
         padding-top: 5px;
         background-color: blanchedalmond;
         cursor: pointer;


         
       }
       img{
         width: 180px;
       }

       .hoverBox{
         position: absolute;
         background-color: #6b645e36;
         width: 200px;
         height: 270px;
         z-index: 9;
         top: 0;
         display: flex;
         justify-content: center;
         align-items: center;
         display: none;
        //  opacity: 0.2;

        .btn{
          
        }
       }

       .show{
         display: inline;
         position: absolute;
         background-color: #6b645e36;
         width: 200px;
         height: 270px;
         z-index: 9;
         top: 0;
         display: flex;
         justify-content: center;
         align-items: center;
       }
     }
  </style>