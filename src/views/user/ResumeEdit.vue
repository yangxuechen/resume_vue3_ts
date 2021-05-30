<template>
    <div >
        <div>
          简历编辑
        </div>
       
    </div>
  </template>
  
  <script lang="ts">
     import { toRaw } from '@vue/reactivity';
import route from '../../router'

     console.log(route.currentRoute.value.params,'param');
     console.log(toRaw(route.currentRoute),'ro');
     
  </script>
  
  <style lang="less" scoped>
  
   
  </style>