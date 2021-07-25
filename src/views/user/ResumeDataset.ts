
import resumeImgUrl from "../../assets/resume-temp/temp-03.png";
import resumeImgUrl2 from "../../assets/resume-temp/temp-02.png";
import resumeImgUrl0 from "../../assets/resume-temp/temp-01.png";
import { ref } from "vue";

interface MinResumeData {
    imgUrl: string;
    desc: string;
    name: string;
  }

  interface ResumeData {
    title: string;
    datalist: MinResumeData[];
    isMax:boolean;
  }
const dataset: MinResumeData[] = [
    {
      // imgUrl: "src/assets/resume-temp/resume-tem2.png",
      imgUrl: resumeImgUrl0,
      desc: "前端简历（清新版）",
      name: "resume-01",
    },
    {
      imgUrl: resumeImgUrl2,
      desc: "前端简历（热火版）",
      name: "resume-02",
    },
    {
      imgUrl: resumeImgUrl,
      desc: "前端简历（简介版）",
      name: "resume-03",
    },
    {
      imgUrl: resumeImgUrl,
      desc: "前端简历（简介版）",
      name: "resume-03",
    },
    {
      imgUrl: resumeImgUrl,
      desc: "前端简历（简介版）",
      name: "resume-03",
    },
  ];

  const dataset2: MinResumeData[] = [
    {
      imgUrl: resumeImgUrl,
      desc: "运营简历（清新版）",
      name: "resume-前端-1",
    },
    {
      imgUrl: resumeImgUrl,
      desc: "运营简历（热火版）",
      name: "resume-前端-1",
    },
    {
        imgUrl: resumeImgUrl,
        desc: "运营简历（清新版）",
        name: "resume-前端-1",
      },
      {
        imgUrl: resumeImgUrl,
        desc: "运营简历（热火版）",
        name: "resume-前端-1",
      },
      {
        imgUrl: resumeImgUrl,
        desc: "运营简历（清新版）",
        name: "resume-前端-1",
      },
      {
        imgUrl: resumeImgUrl,
        desc: "运营简历（热火版）",
        name: "resume-前端-1",
      },
  ];
  const resumedata:ResumeData[] =[
    { title: "前端开发", datalist: dataset ,isMax:false},
    { title: "运营设计", datalist: dataset2 ,isMax:false},
  ];

  let tempResumeData:ResumeData[] = resumedata;

  export function getCoderResumes(){
      return dataset;
  }

  export function getMinCoderResumes(){
      return dataset.slice(0,4);
  }

  export function getDesignerResumes(){
      return dataset2;
  }

  export function getMinDesignerResumes(){
      return dataset2.slice(0,4);
  }

  /**
   * 
   * @returns 获取原始数据，各类简历只展示最小条数4
   */
  export function getResumeData(){
      console.log(getMinCoderResumes());
      const coderMinResumes:ResumeData = {
          title:'前端开发',
          datalist:getMinCoderResumes(),
          isMax:false
      }
      const designerMinResumes:ResumeData ={
          title:'运营设计',
          datalist:getMinDesignerResumes(),
          isMax:false
      }
      return [coderMinResumes,designerMinResumes];
  }


  /**
   * 
   * @returns 将前端开发的简历收起
   */
  export function clickMaxCoder(){

    tempResumeData[0].datalist = getCoderResumes();
    tempResumeData[0].isMax = false;
    return tempResumeData;
  }


  /**
   * 
   * @returns 将前端开发的简历展开
   */
  export function clickMinCoder(){
    tempResumeData[0].datalist = getMinCoderResumes();
    tempResumeData[0].isMax = true;
    return tempResumeData;
  }

  /**
   * 
   * @returns 清空开发类简历 
   */
  export function closeCoder(){
    tempResumeData[0].datalist = [];
    return tempResumeData;
  }
  /**
   * 将运营设计类展开
   * @returns 
   */
  export function clickMaxDesigner(){
    tempResumeData[1].datalist = getDesignerResumes(); 
    tempResumeData[1].isMax = false;
    return tempResumeData;
  }

  /**
   * 
   * @returns 将运营设计类收起
   */
  export function clickMinDesigner(){
    tempResumeData[1].datalist = getMinDesignerResumes(); 
    tempResumeData[1].isMax = true;
    return tempResumeData;
  }

  /**
   * 
   * @returns 清空设计类简历
   */
  export function closeDesigner(){
    tempResumeData[1].datalist = []; 
    return tempResumeData;
  }