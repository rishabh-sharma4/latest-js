//finding duplicates in the array
const arr=[10,10,10,10,10,40,40,40,33,33,34,35,10];
console.log(arr.length);
const filteredValues=arr.filter((element,index)=>arr.indexOf(element)!==index)
console.log(filteredValues);
let redun=[]

for(i=0;i<arr.length;i++){
    for(j=0;j<arr.length;j++){
        if((i!==j)&&(arr[i]===arr[j])){
            redun.push(arr[j]);
            arr.splice(arr.indexOf(arr[j]),1);
            
        }
    }
}
console.log(redun);
console.log(typeof(redun))
console.log(arr);