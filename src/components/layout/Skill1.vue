<template>
    <div class="info-box">
        <div class="title">
            <PushpinOutlined :style="{fontSize: '20px', color: 'black'}"  />
         <h4>技能特长</h4>
        </div>
        <div v-for="record in skilllist">
          <div class="skill-box">
            <div><input class="input_dash" :value="record.key"></div>
            <div><input class="input_dash" :value="record.value" style="text-align: right;"></div>
           </div>
          <div class="progress-box">
            <a-progress :percent="record.process" :show-info="false" strokeColor="#9e9494" />
          </div>
        </div>
       
    </div>
  </template>


<script lang="ts">
   interface Skill{
       key:string;
       value:string;
       process:number
   }
</script>
  <script lang="ts" setup>
  
  import {UserOutlined,ManOutlined,
    PaperClipOutlined,UsergroupAddOutlined,
    SolutionOutlined,HourglassOutlined,PhoneOutlined,MailOutlined,PushpinOutlined} from '@ant-design/icons-vue'
import { reactive } from 'vue';

    const skilllist = reactive<Skill[]>([
        {key:'javascript',value:'良好',process:80},
        {key:'html5',value:'良好',process:50},
        {key:'css3',value:'良好',process:60},
        {key:'node.js',value:'良好',process:50},
        {key:'vue3.js',value:'良好',process:50},
        {key:'java',value:'良好',process:50},
    ])
  </script>
  
  <style lang="less" scoped>
      .info-box{
          width: 100%;
          padding: 0 15px;
          margin: 15px auto;
          color: white;
          .title{
              background-color: white;
              width: 100%;
              height: 30px;
            //   line-height: 30px;
              border-bottom-left-radius: 50px;
              border-top-left-radius: 50px;
              padding-left: 10px;
              display: flex;
             align-items: center;

             h4{
                 margin: 0 0 0 5px;
             }

            
          
          }

          .info{
              width: 100%;
              height: 23px;
            //   padding-left: 10px;
              display: flex;
              align-items: center;
              padding-top: 7px;
              margin: 0;
              .info-desc{
                  padding-left: 10px;
                 
              }
          }

          .skill-box{
              display: flex;
              justify-content: space-between;
              padding: 5px 0;
          }

      }

      .input_dash{
          width:100px;
          height: 20px;
              border-color:white;
            //   padding: 5px;
              border-width: 0ch;
              text-align: left;
               border-color: #25252a;
               border-width: 1px;
               border-style: dotted;   
               background-color: #25252a;
               color: white;
               
           }
           .input_dash:focus{
               background:none;  
               outline:none;  
               border:0px;
            //    padding: 5px;
               border-color: tomato;
               border-width: 1px;
               border-style: dotted;    
               
           }

           .progress-box{
               padding: 0;
               margin-top: -10px;
           }
  </style>