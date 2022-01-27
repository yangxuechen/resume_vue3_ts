

export const getSvgPath = (svgStr: string) =>{ 
   let res = '';
   const svgCharList = svgStr.split('<');
   svgCharList.map(svg => {
       if(svg.includes('path',0)){
           res += `<${svg}` 
       }
   })
   return res;
 
}