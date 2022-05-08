let name={   //bind polyfill example
    firstName:"Rishabh",
    lastName:"Sharma"
}
let printName= function(){
    console.log(this.firstName +" "+ this.lastName);
}
Function.prototype.mybind= function(arg){
    let obj=this;
    console.log(obj);
    return function(){
        obj.call(arg);
    }
}
let printName2= printName.mybind(name);
printName2();