<template>
    <div class="info-box">
        <div class="title">
            <UserOutlined :style="{fontSize: '20px', color: 'black'}"  />
         <h4>个人信息</h4>
        </div>
         <div class="info">
             <div><ManOutlined /></div>
             <div class="info-desc"><input class="input_dash name" value="男"></div>
         </div>
         <div class="info">
             <div><PaperClipOutlined /></div>
             <div class="info-desc"><input class="input_dash name" value="24"></div>
         </div>
         <div class="info">
             <div><UsergroupAddOutlined /></div>
             <div class="info-desc"><input class="input_dash name" value="汉"></div>
         </div>
         <div class="info">
             <div><SolutionOutlined /></div>
             <div class="info-desc"><input class="input_dash name" value="本科"></div>
         </div>
         <div class="info">
             <div><HourglassOutlined /></div>
             <div class="info-desc"><input class="input_dash name" value="2年"></div>
         </div>
         <div class="info">
             <div><PhoneOutlined /></div>
             <div class="info-desc"><input class="input_dash name" value="18328486111"></div>
         </div>
         <div class="info">
             <div><MailOutlined /></div>
             <div class="info-desc"><input class="input_dash name" value="88888888@qq.com"></div>
         </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  
  import {UserOutlined,ManOutlined,
    PaperClipOutlined,UsergroupAddOutlined,
    SolutionOutlined,HourglassOutlined,PhoneOutlined,MailOutlined} from '@ant-design/icons-vue'
  </script>
  
  <style lang="less" scoped>
      .info-box{
          width: 100%;
          padding: 0 15px;
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
              padding-left: 10px;
              display: flex;
              align-items: center;
              padding-top: 7px;
              margin: 0;
              .info-desc{
                  padding-left: 15px;
                 
              }
          }

      }

      .input_dash{
          width: 140px;
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
  </style>