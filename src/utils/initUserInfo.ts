import { UserInfo, UserInfoHead, UserInfoBase, Education, WorkExperience, Skill, Intention, Project } from './../views/UserInfo';

import img_url from "../assets/avatar-xx.png";

 const userInfoHead:UserInfoHead = {
     name:'yxc',
     motto:'11',
     avatar:img_url
};

 const userInfoBase: UserInfoBase = {
    birthday : '1997-12-21',
    sex : '男',
    age : '24',
    education: '本科',
    nameFamily :'汉',
    workExperience : '2年',
    phoneNumber : '18318486111',
    email :'1324688478@qq.com',
    qq : '1324688478' ,
    weChat : 'sdpsdp',
 };


 const educationList: Education[] = [
     {
    education : '本科',
    firstSchool : 'XX大学',
    firstMajor : '软件工程',
    firstSchoolExperience : '2016年于xx大学学习软件工程专业',
    startTime : '2016-9-1',
    endTime : '2020-7-1',
    time : '2016-2020'
 },
 {
    education : '本科',
    firstSchool : 'XX大学',
    firstMajor : '软件工程',
    firstSchoolExperience : '2016年于xx大学学习软件工程专业',
    startTime : '2016-9-1',
    endTime : '2020-7-1',
    time : '2016-2020'
 }
]

 const workExperienceList: WorkExperience[] = [{
    firstJobCompany : 'XXXX信息技术有限公司',
    firstJobPostion : '前端开发',
    firstJobStartTime : '2019',
    firstJobEndTime : '2020',
    time : '2019-2020',
    firstJobDesc1 : '负责相关产品的需求以及前端程序的实现，提供合理的前端架构。改进和优化开发工具、开发流程、和开发框架',
    firstJobDesc2 : 'Web前端功能设计、开发和实现，与后台工程师协作，完成数据交互、动态展现;',
    firstJobDesc3 : '从视觉和易用性角度，为网站设计提供改进建议，为网站/客户端的页面提供持续优化方案',
    firstJobDesc4 : '',
    firstJobDesc5 : '',
 }]

 const skillList: Skill[] = [
    { skill : 'javascript', degree : '50', degreeDesc : '良好',},
    { skill : 'Html', degree : '50', degreeDesc : '良好',},
    { skill : 'css', degree : '80', degreeDesc : '良好',},
    { skill : 'vue.js', degree : '50', degreeDesc : '良好',},
    { skill : 'typescript', degree : '50', degreeDesc : '良好',},
    { skill : 'java', degree : '40', degreeDesc : '良好',},
   ]

 const intention:Intention = {
    workCity : '成都',
    jobPostion  : '前端开发',
    salary  : '1',
    entryTime  : '两周内',
 }

 const projectList: Project[] = [{
    projectName : '在线简历制作工具',
    projectDesc  : '一款可以在线编辑的简历模版工具，支持在线导出pdf文件',
    projectLink  : 'https://www.dxjl.cc/',
 },
 {
   projectName : '在线简历制作工具2',
   projectDesc  : '一款可以在线编辑的简历模版工具，支持在线导出pdf文件2',
   projectLink  : 'https://www.dxjl.cc/',
}
]


 const userInfo : UserInfo = {
    userInfoHead:userInfoHead,
    userInfoBase: userInfoBase,
    educationList: educationList,
    workExperienceList: workExperienceList,
    skillList: skillList,
    intention: intention,
    projectList: projectList
 }
export default {userInfoHead, userInfoBase, educationList, workExperienceList, skillList, intention, projectList,userInfo }

