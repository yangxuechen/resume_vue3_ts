<template>
      <div>
         <Header></Header>
        <!-- <div>
          <a-button type="primary" @click="onClick">确认</a-button>
        </div> -->
        <div class="mainContrainer">
          <router-view></router-view>
        </div>
    
      </div>
</template>

<script lang="ts" setup>
  import { ref } from "vue";
  import {message} from 'ant-design-vue'
  import Header  from '../components/layout/Header.vue'
  const msg = ref<string>('hello');

    const onClick =()=>{
      message.info('按钮被点击');
    }
</script>

<style lang="less" scoped>

  //  .contrainer{
  //      background-color: aquamarine;
  //      width:300px;
  //      height: 300px;

  //      & >div:first-child{
  //         color: brown;
  //       font-size: larger;
  //      }
  //  }

  .mainContrainer{
    // margin-top: 50px;
    padding-top: 50px;
  }
</style>