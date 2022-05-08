let count=0;
const getData =()=>{
    console.log("Fetching Data...",count++);
}

const debounce= function(fn,t){
    let timer;
 return function(){
    
     clearTimeout(timer);
     timer=setTimeout(()=>{
         fn();
     },t)
 }
}
const efficient = debounce(getData,4000);