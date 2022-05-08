function sum(args){
   const[first,second]=args;
    console.log(first+second);
   return first+second;
}
function sumall(){
    var params=arguments;
sum.call(this,params);
}
sumall(1,2);