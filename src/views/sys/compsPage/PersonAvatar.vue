<template>
  <div class="person-avatar-box">
    <rs-card title="头像信息组件1">
      <template v-slot:content>
        <Avatar class="avatar"></Avatar>
      </template>
      <template v-slot:footer>
        <div>
          <div>组件数据使用store中的用户信息。</div>
          <div>组件名: Avatar</div>
          <div>组件地址: components/layout/Avatar.vue</div>
        </div>
      </template>
    </rs-card>

    <rs-card title="头像信息组件2" style="margin-top: 50px">
      <template v-slot:content>
        <AvatarTop></AvatarTop>
      </template>
      <template v-slot:footer>
        <div>
          <div>组件数据使用store中的用户信息。</div>
          <div>组件名: AvatarTop</div>
          <div>组件地址: components/base/avatar/AvatarTop.vue</div>
        </div>
      </template>
    </rs-card>

    <rs-card title="头像信息组件3" style="margin-top: 50px">
      <template v-slot:content>
        <AvatarTop2></AvatarTop2>
      </template>
      <template v-slot:footer>
        <div>
          <div>组件数据使用store中的用户信息。</div>
          <div>组件名: AvatarTop2</div>
          <div>组件地址: components/base/avatar/AvatarTop2.vue</div>
        </div>
      </template>
    </rs-card>
  </div>
</template>

<script lang="ts" setup>
import RsCard from "../../../components/base/card/RsCard.vue";
import Avatar from "../../../components/layout/Avatar.vue";
import AvatarTop from "../../../components/base/avatar/AvatarTop.vue";
import AvatarTop2 from "../../../components/base/avatar/AvatarTop2.vue";
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
