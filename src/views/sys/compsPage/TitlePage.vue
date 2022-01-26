<template>
  <div class="title-page">
    <rs-card>
      <template v-slot:content>
        <TitleA></TitleA>
      </template>
      <template v-slot:footer>
        <div>
          <div>组件数据使用store中的用户信息。</div>
          <div>组件名: TitleA</div>
          <div>组件地址: /components/base/title/TitleA.vue</div>
        </div>
      </template>
    </rs-card>

    <rs-card>
      <template v-slot:content>
        <TitleB
          title="基础技能"
          iconName="user"
          backgroundColor="#062743"
          :backgroundColorChange="true"
          borderColor="#fff"
          font-size="14px"
          :show-tool="true"
          size="normal"
          color="#fff"
          @btnClick=""
        ></TitleB>
      </template>
      <template v-slot:footer>
        <div>
          <div>组件数据使用store中的用户信息。</div>
          <div>组件名: TitleB</div>
          <div>组件地址: /components/base/title/TitleB.vue</div>
        </div>
      </template>
    </rs-card>

    <rs-card>
      <template v-slot:content>
        <!-- <rs-icon iconType="icon-heart-fill"></rs-icon> -->
        <TitleB
          title="基础技能"
          iconName="loop"
          backgroundColor="black"
          :backgroundColorChange="true"
          borderColor="#fff"
          font-size="14px"
          :show-tool="true"
          titleType="title-02"
          size="small"
          color="#fff"
          @btnClick=""
        ></TitleB>
      </template>
      <template v-slot:footer>
        <div>
          <div>组件数据使用store中的用户信息。</div>
          <div>组件名: TitleB</div>
          <div>组件地址: /components/base/title/TitleB.vue</div>
        </div>
      </template>
    </rs-card>

    <rs-card>
      <template v-slot:content>
        <!-- <rs-icon iconType="icon-heart-fill"></rs-icon> -->
        <TitleB
          title="基础技能"
          iconName="star"
          backgroundColor="black"
          :backgroundColorChange="true"
          borderColor="#fff"
          font-size="14px"
          :show-tool="true"
          titleType="title-03"
          size="small"
          color="#fff"
          @btnClick=""
        ></TitleB>
      </template>
      <template v-slot:footer>
        <div>
          <div>组件数据使用store中的用户信息。</div>
          <div>组件名: TitleB</div>
          <div>组件地址: /components/base/title/TitleB.vue</div>
        </div>
      </template>
    </rs-card>

    <rs-card>
      <template v-slot:content>
        <TitleB
          title="基础技能"
          iconName="star"
          backgroundColor="#fff"
          :backgroundColorChange="false"
          borderColor="black"
          font-size="14px"
          :show-tool="true"
          titleType="title-04"
          size="small"
          color="black"
          @btnClick=""
        ></TitleB>
      </template>
      <template v-slot:footer>
        <div>
          <div>组件数据使用store中的用户信息。</div>
          <div>组件名: TitleB</div>
          <div>组件地址: /components/base/title/TitleB.vue</div>
        </div>
      </template>
    </rs-card>

    <rs-card>
      <template v-slot:content>
        <!-- <rs-icon iconType="icon-heart-fill"></rs-icon> -->

        <Test></Test>
      </template>
      <template v-slot:footer>
        <div>
          <div>组件数据使用store中的用户信息。</div>
          <div>组件名: SvgIcon test</div>
          <div>组件地址: /components/base/title/TitleC.vue</div>
        </div>
      </template>
    </rs-card>
  </div>
</template>

<script lang="ts" setup>
import { Icon } from "../../../components/base/icon/Icon";
import TitleA from "../../../components/base/title/TitleA.vue";
import RsCard from "../../../components/base/card/RsCard.vue";
import TitleB from "../../../components/base/title/TitleB.vue";
import TitleC from "../../../components/base/title/TitleC.vue";
import RsIcon from "../../../components/base/icon/RsIcon.vue";
import SvgIcon from "../../../components/base/icon/SvgIcon.vue";
import Test from "./Test.vue";
</script>

<style lang="less" scoped>
.title-page {
  width: 100%;
  padding: 25px;
}
</style>
