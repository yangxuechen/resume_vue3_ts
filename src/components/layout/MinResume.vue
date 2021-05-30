<template>
    <div class="minResume-box">
        <div >
          <img :src="resumeData.imgUrl">
          <div class="title">{{resumeData.desc}}</div>
        </div>
        <div class="tips" >
          <a-button type="primary" size="small" class="btn">点击查看</a-button>
        </div>
    </div>
  </template>
  
  <script lang="ts">
      import { message } from "ant-design-vue";
      import { defineProps, reactive, ref } from "vue";
      interface MinResumeData{
        imgUrl:string;
        desc:string;
        name:string
      }
  </script>
  <script lang="ts" setup>
      
      const props = defineProps({
        data:{
          type:Object,
          default:undefined
        }
      });

      const resumeData = reactive<MinResumeData>({
         imgUrl:props.data.imgUrl,
         desc:props.data.desc,
         name:props.data.name,
      });
  

  </script>
  
  <style lang="less" scoped>
  
     .minResume-box{
       width: auto;
       height: auto;
       position: absolute;

       &>:first-child{
         width: 200px;
       }

       img{
         width: 180px;
       }
 
     }

     .tips{
         display: none;
         position: absolute;
         background-color: #6b645e36;
         width: 200px;
         height: 280px;
         z-index: 9;
         top: 0;  
         cursor: pointer;
       
         .btn{
           position: relative;
           top: 45%;
          //  left: 50%;
         }
     }

     .minResume-box:hover{
       padding-top: 10px;
     }
     .minResume-box:hover .tips{
       display: block;
     }

     .title{
       color: #312b2b94;
     }
  </style>