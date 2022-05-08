// const arr=["Suzuki","Honda","Mahindra"];
// const obj={name:"Rishabh", value:"30"};
// console.log(typeof(arr));
// console.log(arr.sort());
// const arr1=[1500,300,40,12,30];
// console.log(arr1.sort((a,b)=>a-b));
// let finalValue='array values are';
// for(let i=0;i<arr.length;i++){
//    finalValue+=arr[i];
// }
// console.log(finalValue)
// let finVal="";
// arr.forEach(myFunction);
// function myFunction(value){
//  finVal+=value+',';
// }
// console.log(finVal);
// console.log(Array.isArray(arr));
// console.log(arr instanceof Array);
// console.log(obj instanceof Object)
// const arr2=[10,20,30,40,50];
// var updatedValue='';
// const arr3=[];
// arr2.forEach((element)=>{
//    console.log(element*2);
//     updatedValue+=element;
//     arr3.push(element);
// })
// console.log(updatedValue);
// console.log(arr3);
// console.log(typeof(arr2.toString()))
// console.log(arr2.toString())

// const arr5=[300,220,10,34];
// console.log(arr5,'Arr');
// console.log(arr5.sort((a,b)=> a-b));
// console.log(arr5,"Arr");
// console.log(typeof arr5.join("*"));
// console.log(arr5,'Arr');
// console.log(arr5.join("*"));//converts to string with a separator
// console.log(arr5,'Arr');
// console.log(arr5.pop());
// console.log(arr5,'Arr');
// console.log(arr5.shift());
// console.log(arr5,'Arr');
// const boys=['Tom','Jack','Jon'];
// const girls=['Emile','Kat','Katherine'];
// const students= boys.concat(girls);
// console.log(students);
// const rappers=['YoYoHoneySingh','Badshah','Raftaar','Bohemia'];
// console.log(rappers.splice(rappers.indexOf('Badshah'),0,'Emiway','Divine'));
// console.log(rappers);
// const fruits=['Mango','Apple','Banana','Kiwi','Papaya'];
// const removed=fruits.slice(fruits.indexOf('Apple'),3);
// console.log(removed);
// console.log(fruits);
// const abc={a:[1,2,3],b:['a','ab']}&&{a:[1,2,3]};
// console.log(abc);
// const two=342;
// console.log(typeof two.toString());
// const ad=[20,10,77,45,333];
// console.log(ad.sort());
// console.log(ad);
// console.log(ad.reverse());
// console.log(ad);
// const ab01=[77,43,23,35];
// console.log(Math.min(...ab01));
// console.log(Math.max.apply(null,ab01))
// const ab02=[9,7,4,33,9,8,7,77];
// console.log(ab02.indexOf(9,-4));
// console.log(ab02.lastIndexOf(7,1));
// const abc=[10,30,40,44,20,10,30];
// console.log(abc.filter((elem,index,array)=>abc.indexOf(elem)!==index));
// console.log(new Set(abc));

// const students=[
//     {id:10,name:"Rishabh"},
//     {id:11,name:"Rahul"},
//     {id:12,name:"Abhishek"}
// ]
// console.log(students.filter((elem,index,arr)=>elem.id==10));

let profile={
    name:"Rishabh",
}
  //Object.freeze(profile); //freezes modification & addition of properties in the Object
//Object.seal(profile); //we can change the existing value but cannot add the value
// Object.defineProperty(profile,"age",{
//     value: 3,
//     writable: false
// })
profile.name= "Rishabh Sharma";
profile.age= 4;
console.log(profile);





