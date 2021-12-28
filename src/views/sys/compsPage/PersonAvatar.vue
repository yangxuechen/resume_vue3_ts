<template>
  <div class="person-avatar-box">
    <rs-card title="头像信息组件1">
      <template v-slot:content>
        <Avatar class="avatar"></Avatar>
      </template>
      <template v-slot:footer>  组件数据使用store中的用户信息。 </template>
    </rs-card>

    <rs-card title="头像信息组件2" style="margin-top: 50px">
      <template v-slot:content>
        <AvatarTop></AvatarTop>
      </template>
    </rs-card>
  </div>
</template>

<script lang="ts" setup>
import RsCard from "../../../components/base/card/RsCard.vue";
import Avatar from "../../../components/layout/Avatar.vue";
import AvatarTop from "../../../components/base/avatar/AvatarTop.vue";
</script>

<style lang="less" scoped>
.person-avatar-box {
  width: 100%;
  padding: 25px;

  .avatar {
    background-color: var(--rs-bgcolor-1);
  }
}
</style>
