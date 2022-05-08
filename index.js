// console.log("Hello World");
// var myName = "Rishabh";
// var age = 26;
// const obj1={name:"Rishabh", id:100};
// debugger;
// console.log(typeof (age))
// console.log(typeof (myName));
// console.log(typeof (obj1));
// function add(a, b = 10) {
//     return a + b;
// }
// var sum = add(4, 67);
// console.log(sum)
// length = 10;
// for (i = 0; i < length; i++) {
//     console.log(i);
// // }
var myFriends = ["Rishabh", "Sharma", "Rishu", "Rishabh", "Abhishek", "RishabhSharma", "Rishabh"];
// for (let elements in myFriends) {
    //console.log(elements);
    //console.log(myFriends[elements]);
// }
// for (let elements of myFriends) {
//     console.log(elements);
// }
// var updatedFriends=myFriends.forEach(function (element, index, array) {
//     console.log(element)
//     return `No ${index}: ${element} Complete array: ${array}`;
// })
//  console.log(myFriends);
// console.log(updatedFriends);
// console.log(myFriends.indexOf("Sharma"));
// console.log(myFriends.indexOf("Rishabh", 3))
// console.log(myFriends.lastIndexOf("Rishabh"));
// console.log(myFriends.lastIndexOf("Rishabh", 5));
// console.log(myFriends.includes("Rishabh"));
// console.log(myFriends.includes("Sharma", 2));
// console.log(myFriends.includes("Sharma", 1));

// const myPrices = [100, 200, 500, 150, 50];
// console.log(myPrices.find((element, index, array) => element < 500));
// const bestPrices = myPrices.find((element, index, array) => element < 50);
// console.log(bestPrices);
// const bestPricesIndex = myPrices.findIndex((element, index, array) => element < 100);
// console.log(bestPricesIndex);
// console.log(myPrices.findIndex((element, index, array) => element < 50));
// const filterPrice = myPrices.filter((element, index, array) => element < 500);
// console.log(filterPrice);
// console.log(myPrices.filter((element, index, array) => element > 600));// filter returns empty array when no condition match
// console.log(myPrices.sort());//this gives incorect response because it first converts array elements to string then compares
// console.log(myPrices.sort((a,b)=> a-b));
// const dataResponse = [
//     { name: "Rishabh", id:102},
//     {name:"Rahul", id: 103},
//     {name:"Abhishek", id: 104},
//     {name:"Sarthak", id: 105},
//     {name:"Danish", id: 106},
//     {name:"BigShow", id: 107},

// ]
// const isDataFound=dataResponse.find((element,index,array)=>{
//     if (element.name==="Danish") return true;
// });
// console.log(isDataFound)

// console.log(myPrices.find((element,index,array)=>{return true;}));
// //if we explicitly pass return true in find callback method then it will return the first array element
// //because it will not go further as it got true at first step only.

const count=myFriends.push("Aditya");
console.log(myFriends);
console.log(count);//returns the new length of array 
// console.log(myFriends.push("Robin","Anshul","Aman"));
// console.log(myFriends.unshift("Rohan"));//adds in the beginning of the array
// console.log(myFriends);

// const vegetables = ['potato', 'tomato', 'onion'];
// console.log(vegetables);
// console.log(vegetables.pop());//removes from end
// console.log(vegetables);
// console.log(vegetables.shift());//removes from beginning
// console.log(vegetables);
// console.log(vegetables.splice(vegetables.length,0,"spinach"));//returns empty array if no value is deleted
// console.log(vegetables);
// console.log(vegetables.splice(1,1,"Tomato"));
// console.log(vegetables);
// const indexOfVegetables = vegetables.indexOf('tomato');
// if(indexOfVegetables!= -1){
//     console.log(vegetables.splice(indexOfVegetables,1,"Tomato"));
// }
// console.log(vegetables);

// let numericOp=[9,8,4,3];
// let finRes=numericOp.map((element,index,array) => {
//     return element**2
// }).filter((element,index,array)=>{
//     return element>25
// }).reduce((accumulator,element,index,array)=>{
//     return accumulator+=element;
// });
// console.log(finRes);

// const multiDim=[
//     ['zone1','zone2'],
//     ['zone3','zone4'],
//     ['zone5','zone6']
// ]
// const flatArr = multiDim.reduce((accumulator,element,index,array)=>{
//     return accumulator.concat(element);
// })
// console.log(flatArr);


//STRINGS
// const role =  "I am a frontend developer";
// console.log(role.search("developer"));
//returns index
// console.log(role.slice(7,16));
//starting and end index
// console.log(role.slice(7, -2));
//removes last two characters from string because of - sign
// console.log(role.slice(7));
//complete string after 7 index
// console.log(role.substring(7,-3));
//whenever we have negative value in substring it will start counting for index 0
// console.log(role.substring(7,10));
// console.log(role.substr(7,8));
//second parametr in substr is length of string, first parameter is start index
//second parameter can't be negative
// console.log(role.substr(-9));
//when negative value is passed, index is counted from end of string
// console.log(role.replace("frontend","fullstack"));
// console.log(role.charAt(8));
//returns character at specified index
// console.log(role.charCodeAt(8));
//returns unicode at a specified index
// console.log(role[7]);
//property access returns string character at certain index
// console.log(role.toUpperCase());
// console.log(role.toLowerCase());
// let f1="Rishabh",f2="Sharma";
// console.log(f1.concat(f2));
// let f3="               Hello Everyone           ";
// console.log(f3.trim());
//removes whitespace from both sides of the string
//converting a string into array
// let f4="55,66,77,88";
// console.log(f4.split(','));
// let currDate= new Date();
// console.log(currDate);
// this time is current time + GMT time
// console.log(currDate.toLocaleString());
// this time is converted to local time zone
// console.log(currDate.toString());
// console.log(Date.now());
// total milliseconds elapsed from 1 Jan 1970
// let f5= new Date(2022,02,01,11,23,10,11);
//parameters are year,month,day,hour,minute,second,millisecond months start with 0 so Jan is 11 month
// other parameters except month are optional
// console.log(f5.toLocaleString());
// console.log(new Date("March 01, 2022 23:31:00").toLocaleString());
//passing date format
// console.log(new Date(1646157753400).toLocaleString());
//passing Milliseconds
// console.log(new Date().toLocaleString());
// console.log(new Date().getFullYear());
// console.log(new Date().getMonth());//0-11 jan-dec
// console.log(new Date().getDate());
// console.log(new Date().getDay());

// console.log(new Date().setFullYear(2022));
// console.log(new Date().setFullYear(2022, 02, 01));
// console.log(new Date().setMonth(02));
// console.log(new Date().setDate(01));

// console.log(new Date().getTime());
// console.log(new Date().getHours());
// console.log(new Date().getMinutes());
// console.log(new Date().getSeconds());
// console.log(new Date().getMilliseconds());

// console.log(new Date().setTime());
// console.log(new Date().setHours(5));
// console.log(new Date().setMinutes(5));
// console.log(new Date().setSeconds(5));
// console.log(new Date().setMilliseconds(5));

// console.log(new Date().toLocaleDateString());
//if only date is required
// console.log(new Date().toLocaleTimeString());
//if only time is required

// console.log(Math.PI);
// console.log(Math.round(11.90811));
// console.log(Math.pow(3,2));
// console.log(Math.sqrt(81));
// Math.abs(x) returns the absolute (positive) value of x
// console.log(Math.abs(-88));
// console.log(Math.ceil(4.51));
//returns next nearest integer
// console.log(Math.floor(44.9));
// console.log(Math.min(0,150,30,-200));
// console.log(Math.max(0,50,30,20));
// console.log(Math.random());
//random no between 0 and 1
// console.log(Math.floor(Math.random()*10));
//random number between 0 to 9
// console.log(Math.trunc(4.6));
//returns integer part of number
// if number is +ve Math.trunc() is same as Math.floor()
//if number is -ve then Math.trunc() is same as Math.ceil()













