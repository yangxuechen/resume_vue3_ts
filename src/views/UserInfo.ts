
/**
 * 用户信息（头部）
 */
export class UserInfoHead{
    // 姓名
    name : string;
    // 座右铭
    motto: string;
    // 头像地址
    avatar: string;

    constructor(name:string,motto:string,avatar:string){
        this.name = name;
        this.motto = motto;
        this.avatar = avatar;
    }
}


/**
 * 用户基本信息
 */
export class UserInfoBase{
    // 出生日期
    birthday : string;
    // 性别
    sex : string;
    // 年龄
    age : string;
    // 最高学历
    education : string;
    // 名族
    nameFamily : string;
    // 工作经验
    workExperience : string;
    // 电话
    phoneNumber : string;
    // 邮箱
    email : string;
    // qq
    qq : string;
    // 微信
    weChat : string;

    constructor(birthday:string,  sex : string, age : string, education : string,  nameFamily : string,  workExperience : string,  phoneNumber : string, email : string,  qq : string, weChat : string ){
      this.birthday = birthday;
      this.sex = sex;
      this.age = age;
      this.education = education;
      this.nameFamily = nameFamily;
      this.workExperience = workExperience;
      this.phoneNumber = phoneNumber;
      this.email = email;
      this.qq = qq;
      this.weChat = weChat;
    }
}

/**
 * 教育背景
 */
export class Education {
    //学历
    education :string;
    // 第一学历学校
    firstSchool :string;
    // 第一学校经历描述
    firstSchoolExperience :string;
    // 第一学历专业
    firstMajor :string;
    // 入学时间
    startTime : string;
    // 毕业时间
    endTime : string;
    // 学习时间
    time: string;


    constructor(education :string, firstSchool :string, secondSchool :string, firstSchoolExperience :string, firstMajor :string, startTime : string, endTime : string, time: string){
        this.education = education;
        this.firstSchool = firstSchool;
        this.firstSchoolExperience = firstSchoolExperience;
        this.firstMajor = firstMajor;
        this.startTime = startTime;
        this.endTime = endTime;
        this.time = time;
    }
}

/**
 * 工作经历
 */
export class WorkExperience{

    // 近期工作1公司
    firstJobCompany : string;
    // 近期工作1职位
    firstJobPostion : string;
    // 近期工作1开始时间
    firstJobStartTime : string;
    // 近期工作1结束时间
    firstJobEndTime : string;
    // 近期工作时间
    time : string;
    // 近期工作描述1
    firstJobDesc1 : string;
    // 近期工作描述2
    firstJobDesc2 : string;
    // 近期工作描述3
    firstJobDesc3 : string;
    // 近期工作描述4
    firstJobDesc4 : string;
    // 近期工作描述5
    firstJobDesc5 : string;

    constructor( firstJobCompany : string, firstJobPostion : string, firstJobStartTime : string, firstJobEndTime : string,time : string, firstJobDesc1 : string, firstJobDesc2 : string, firstJobDesc3 : string, firstJobDesc4 : string, firstJobDesc5 : string){
       this.firstJobCompany = firstJobCompany;
       this.firstJobPostion = firstJobPostion;
       this.firstJobStartTime = firstJobStartTime;
       this.firstJobEndTime = firstJobEndTime;
       this.time = time;
       this.firstJobDesc1 = firstJobDesc1;
       this.firstJobDesc2 = firstJobDesc2;
       this.firstJobDesc3 = firstJobDesc3;
       this.firstJobDesc4 = firstJobDesc4;
       this.firstJobDesc5 = firstJobDesc5;
    }
}

/**
 * 工作技能
 */
export class Skill{
    // 技能
    skill : string;
    // 掌握程度
    degree : string;
    // 掌握程度描述
    degreeDesc : string;

    constructor(skill : string, degree : string, degreeDesc : string){
        this.skill = skill;
        this.degree = degree;
        this.degreeDesc = degreeDesc;
    }
} 

/**
 * 求职意向
 */
export class Intention{
    // 工作城市
    workCity : string;
    // 职位
    jobPostion : string;
    // 薪资待遇
    salary : string;
    // 入职时间
    entryTime : string;

    constructor(workCity : string, jobPostion : string,  salary : string, entryTime : string ){
        this.workCity = workCity;
        this.jobPostion = jobPostion;
        this.salary = salary;
        this.entryTime = entryTime;
    }
}

/**
 * 项目（开源项目、个人项目）
 */
export class Project{
    // 项目名
    projectName : string;
    // 项目描述
    projectDesc : string;
    // 项目地址
    projectLink : string;

    constructor( projectName : string, projectDesc : string, projectLink : string){
        this.projectName = projectName;
        this.projectDesc = projectDesc;
        this.projectLink = projectLink
    }
}

/**
 * 获奖经历
 */
export class AWardExperience{
    // 获奖内容
    awardContent : string;
    // 获奖时间
    awardTime : string;

    constructor(awardContent : string,  awardTime : string){
        this.awardContent = awardContent;
        this.awardTime = awardTime;
    }
}

/**
 * 用户信息
 */
export class UserInfo{
    userInfoHead : UserInfoHead;
    userInfoBase : UserInfoBase;
    educationList : Education[];
    workExperienceList : WorkExperience[];
    skillList : Skill[];
    intention : Intention;
    projectList : Project[];

    constructor(userInfoHead : UserInfoHead, userInfoBase : UserInfoBase,  educationList : Education[], workExperienceList : WorkExperience[],  skillList : Skill[], intention : Intention, projectList : Project[]){
        this.userInfoHead = userInfoHead;
        this.userInfoBase = userInfoBase;
        this.educationList = educationList;
        this.workExperienceList = workExperienceList;
        this.skillList = skillList;
        this.intention = intention;
        this.projectList = projectList
    }
}


