import { UserInfo, UserInfoHead, UserInfoBase, Education, WorkExperience, Skill, Intention, Project } from './../views/UserInfo';

 const userInfoHead:UserInfoHead = {
     name:'yxc',
     motto:'11',
     avatar:'../assets/avatar-1.png'
};

 const userInfoBase: UserInfoBase = {
    birthday : '1997-12-21',
    sex : '男',
    age : '24',
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
 },
 {
    education : '本科',
    firstSchool : 'XX大学',
    firstMajor : '软件工程',
    firstSchoolExperience : '2016年于xx大学学习软件工程专业',
 }
]

 const workExperienceList: WorkExperience[] = [{
    firstJobCompany : 'XXXX信息技术有限公司',
    firstJobPostion : '前端开发',
    firstJobStartTime : '2019',
    firstJobEndTime : '2020',
    firstJobDesc1 : '负责官网的开发1',
    firstJobDesc2 : '负责app的开发2',
    firstJobDesc3 : '负责小程序的开发3',
    firstJobDesc4 : '负责官网的开发4',
    firstJobDesc5 : '负责官网的开发5',
 }]

 const skillList: Skill[] = [{
    skill : 'javascript',
    degree : '0.5',
    degreeDesc : '良好',
 }]

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
 }]


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

