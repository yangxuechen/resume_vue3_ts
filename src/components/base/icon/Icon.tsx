

import  { defineComponent,ref, VNode ,h} from 'vue'


export const Icon =  defineComponent({
    name:'icon',
    props:{
        name:{type: String, default:'loop'},
    
    },
    
    setup(props){
        
       const svgRef = ref<string>('');
       
  
       
        const loadFile = function (name: string) {
            // name为文件所在位置
            let xhr = new XMLHttpRequest(),
              okStatus = document.location.protocol === "file:" ? 0 : 200;
            xhr.open("GET", name, false);
            xhr.overrideMimeType("text/html;charset=utf-8"); //默认为utf-8
            xhr.send(null);
            return xhr.status === okStatus ? xhr.responseText : null;
          };

          const test =  () => {
             
            let svg = loadFile(`/src/assets/svg/${props.name}.svg`);
            const svglist = svg?.split("width") || [];
            svg =
              svglist[0] +
              `fill="green"` +
              ` width="45px"` +
              ` height="45px"` +
              svglist[1];
            svgRef.value = svg||'';
            console.log(svg, "svg");
 
            // return () => (
            //     svg
            // )
          };

          test();

          return () => (<div v-html={svgRef.value}></div>)

 
    },
    
    
    // render():VNode {
    //     return h('div'
    //     , {}, 'msg')
    //   }
    // render() { return <svg
    //     class="icon"
    //     width="25px"
    //     height="25px"
    //     viewBox="0 0 1024 1024"
    //     version="1.1"
    //     xmlns="http://www.w3.org/2000/svg"
    //   >
    //     <path
    //       d="M821 166.7l46.5-55c8.3-9.5 4.8-17.5-7.8-17.7l-243.5-3.2c-12.6-0.1-19 9.3-14.3 21l91.7 222.1c4.9 11.8 13.8 12.1 19.8 1.1l36.2-65.4C802.8 321.4 836 393.9 836 474c0 15.8-1.3 31.4-3.8 46.5l122.2 20.9c3.7-22 5.6-44.4 5.6-67.4 0-122.5-53.8-232.3-139-307.3zM348.3 398.3l-74.7 1.3c18.3-72 64.4-136.9 133.9-176.9 13.7-8 27.8-14.5 42.1-20L406.7 86.4c-20.8 7.8-41.4 17.3-61.2 28.9-106.1 61.1-174.3 162.5-196.6 273.9L78 376.4C65.6 374 60.4 381 66.6 392l118.8 212.6c6.2 11.1 17.6 11.9 25.3 1.8L357.3 416c7.7-10 3.7-18.1-9-17.7zM834.8 698l-238.1-31.7c-12.6-1.7-17.5 5.8-10.8 16.6l38.5 64.1c-71.5 20.2-150.8 12.6-220.2-27.6-13.7-8-26.5-16.9-38.3-26.5l-79.4 95.2c17.2 14.1 35.6 27.1 55.6 38.6 105.6 61.2 227.7 69.8 335.2 33.5l24.4 67.7c4 12 12.7 13 19.3 2l124.7-209.1c6.5-10.9 1.5-21.2-10.9-22.8z"
    //     />
    //   </svg>}
});








