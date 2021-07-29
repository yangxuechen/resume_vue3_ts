<template>
  <div class="p-p-box">
    <div class="p-p-content">
      <div class="p-p-title-box">
        <img
          src="../../assets/icons8-policy-document-96.png"
          style="width: 50px"
        />
        <h2>隐私政策</h2>
      </div>
      <div class="content">
        dxjl.cc
        非常重视用户的隐私和个人信息保护。您在使用网站时，可能会收集和使用您的相关信息。希望通过《dxjl隐私政策》向您说明在您使用
        dxjl.cc 网站时，如何收集、使用、保存、共享和转让这些信息。
      </div>
      <h3 class="item">一、如何收集和使用您的个人信息</h3>

      <p>
        网络身份标识信息（浏览器UA、IP地址）；个人位置信息（定位信息、经纬度）；电子邮件地址。
        仅会出于以下目的，收集和使用您的个人信息：
      </p>
      <li>
        评论/反馈/提交应用时会记录您的邮箱，当我回复后会通过邮件通知您（主动，存储，不会公开邮箱）
      </li>
      <li>
        评论/反馈/提交应用时会记录您的位置信息，用作展示所在地所用，如北京市的网友（被动，存储，不会公开IP）
      </li>
      <li>
        评论/反馈/提交应用时会记录您的浏览器代理，用作展示系统版本方便大家参考以及我回复问题时可以快速定位问题（被动，存储）
      </li>
      <li>
        下载时会记录您的IP地址，防止被恶意调用可及时封禁相应IP（被动，存储，定期清理数据）
      </li>
      <p>
        除了以上4条还有一个是百度的访客统计，这个数据是百度管理的，再也没有其它的了！
      </p>

      <h3 class="item">二、如何使用 Cookies 和本地 LocalStorage 存储</h3>
      <p>
        大家都知道，MacWk
        是没有会员注册功能的，为实现无账号评论、网站风格切换、浏览模式切换功能，会在您的浏览器中进行本地存储，您可以随时清除浏览器中保存的所有
        Cookies 以及 LocalStorage。
      </p>
      <h3 class="item">三、如何共享、转让您的个人信息</h3>
      <li>不会与任何公司、组织和个人共享您的个人信息</li>
      <li>不会将您的个人信息转让给任何公司、组织和个人</li>

      <h2 class="item">所有使用到的信息如下：</h2>
      <a-table
        :dataSource="dataset"
        :columns="columns"
        :pagination="false"
      ></a-table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "@vue/reactivity";

const dataset = reactive<any>([
  {
    key: "1",
    name: "IP 地址",
    address: "128.11.11.1",
  },
  {
    key: "2",
    name: "国家",
    address: "中国",
  },
  {
    key: "2",
    name: "国家/地区代码",
    address: "CN",
  },
  {
    key: "2",
    name: "省份",
    address: "四川",
  },
  {
    key: "2",
    name: "城市",
    address: "成都",
  },
  {
    key: "2",
    name: "区/县",
    address: "武侯区",
  },
  {
    key: "2",
    name: "网络运营商",
    address: "电信",
  },
  {
    key: "2",
    name: "经度",
    address: "104.04303",
  },
  {
    key: "2",
    name: "纬度",
    address: "30.64235",
  },
  {
    key: "2",
    name: "浏览器",
    address: "afari 14.0.2",
  },
  {
    key: "2",
    name: "系统",
    address: "macOS 10.15.6 Catalina",
  },
]);

const columns = [
  {
    title: "属性",
    dataIndex: "name",
    key: "name",
  },

  {
    title: "值",
    dataIndex: "address",
    key: "address",
  },
];

console.log();
</script>

<style lang="less" scoped>
.p-p-box {
  width: 100%;
  min-height: calc(100vh - 80px);
  padding: 50px 0;
}

.p-p-content {
  width: 80%;

  margin: auto;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #bebebe;
  border-radius: 45px;
  padding: 30px;
  font-size: 16px;
  text-align: left;
  .p-p-title-box {
    display: flex;
    align-items: center;

    h2 {
      padding-left: 30px;
    }
  }

  .content {
    padding-top: 50px;
  }

  .item {
    padding-top: 50px;
  }
}

li {
  padding: 10px 0;
}
</style>
