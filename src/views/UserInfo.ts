
/**
 * 用户信息（头部）
 */
export class UserInfoHead{
    // 姓名
    name : String;
    // 座右铭
    motto: String;
    // 头像地址
    avatar: String;

    constructor(name:String,motto:String,avatar:String){
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
    birthday : String;
    // 性别
    sex : String;
    // 年龄
    age : String;
    // 最高学历
    education : String;
    // 名族
    nameFamily : String;
    // 工作经验
    workExperience : String;
    // 电话
    phoneNumber : String;
    // 邮箱
    email : String;
    // qq
    qq : String;
    // 微信
    weChat : String;

    constructor(birthday:String,  sex : String, age : String, education : String,  nameFamily : String,  workExperience : String,  phoneNumber : String, email : String,  qq : String, weChat : String ){
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
    education :String;
    // 第一学历学校
    firstSchool :String;
     // 第一学校经历描述
    firstSchoolExperience :String;
    // 第一学历专业
    firstMajor :String;


    //  // 第二学历学校
    // secondSchool :String;
    // // 第二学历专业
    // secondMajor :String;
    // // 第二学校经历描述
    // secondSchoolExperience :String;


    constructor(education :String, firstSchool :String, secondSchool :String, firstSchoolExperience :String, firstMajor :String){
        this.education = education;
        this.firstSchool = firstSchool;
        this.firstSchoolExperience = firstSchoolExperience;
        this.firstMajor = firstMajor;
    }
}

/**
 * 工作经历
 */
export class WorkExperience{

    // 近期工作1公司
    firstJobCompany : String;
    // 近期工作1职位
    firstJobPostion : String;
    // 近期工作1开始时间
    firstJobStartTime : String;
    // 近期工作1结束时间
    firstJobEndTime : String;
    // 近期工作描述1
    firstJobDesc1 : String;
    // 近期工作描述2
    firstJobDesc2 : String;
    // 近期工作描述3
    firstJobDesc3 : String;
    // 近期工作描述4
    firstJobDesc4 : String;
    // 近期工作描述5
    firstJobDesc5 : String;

    constructor( firstJobCompany : String, firstJobPostion : String, firstJobStartTime : String, firstJobEndTime : String, firstJobDesc1 : String, firstJobDesc2 : String, firstJobDesc3 : String, firstJobDesc4 : String, firstJobDesc5 : String){
       this.firstJobCompany = firstJobCompany;
       this.firstJobPostion = firstJobPostion;
       this.firstJobStartTime = firstJobStartTime;
       this.firstJobEndTime = firstJobEndTime;
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
    workCity : String;
    // 职位
    jobPostion : String;
    // 薪资待遇
    salary : String;
    // 入职时间
    entryTime : String;

    constructor(workCity : String, jobPostion : String,  salary : String, entryTime : String ){
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
    projectName : String;
    // 项目描述
    projectDesc : String;
    // 项目地址
    projectLink : String;

    constructor( projectName : String, projectDesc : String, projectLink : String){
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
    awardContent : String;
    // 获奖时间
    awardTime : String;

    constructor(awardContent : String,  awardTime : String){
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


