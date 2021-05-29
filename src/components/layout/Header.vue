<template>
    <div class="contrainer-header">
       <div class="leftBox">
           <img src="../../assets/logo-3.png" >
           <h2>阿King简历</h2>
       </div>
       <div class="rightBox">
           <h3 class="item" @click="onClick_1">模版中心</h3>
           <h3 class="item" @click="onClick_2">我的简历</h3>
       </div>
    </div>
  </template>
  
  <script lang="ts" setup>
    import route from '../../router'
  
    const onClick_2 =()=>{
        route.push({path:'/mineResume'});
    }
    const onClick_1 =()=>{
        route.push({path:'/resumeTemplate'});
    }
  </script>
  
  <style lang="less" scoped>
       .contrainer-header{
           width: 100%;
           height: 50px;
           background-color: #fffffb;
           display: flex;
           position: fixed;
           top: 0;
           padding-left: 25px;
           padding-right: 25px;
           line-height: 50px;
           justify-content: space-between;
           border-bottom-width: 1px;
           border-bottom-color: #00000021;
           border-bottom-style: solid;
        //    padding: 15px;

           .leftBox{
               width: auto;
               height: 100%;
               display: flex;
              
              img{
                  margin: 5px;
                  width: 40px;
                  height: 40px;
                  cursor: pointer;
              }
               
              h2{
                  margin-left: 15px;
                  cursor: pointer;
              }
           }


           .rightBox{
               display: flex;
               padding-right: 50px;
               .item{
                   padding-left: 15px;
                   padding-right: 15px;
                   cursor: pointer;
               }
           }
       }
  </style>