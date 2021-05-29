<template>
  <div class="contrainer">
      <div>
        test
      </div>
     
  </div>
</template>

<script lang="ts">

</script>

<style lang="less" scoped>

   .contrainer{
       background-color: aquamarine;
       width:300px;
       height: 300px;

       & >div:first-child{
          color: brown;
        font-size: larger;
       }
   }
</style>