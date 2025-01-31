// arrow functions
// syntax
const hello =() => {
    console.log("Say Hello !");
}
hello();

// const add=(a,b) => {
//     return a+b;
// }

// if you dont have the body of function that is just a line in your body you can also do this --

const add=(a,b) => a+b;
console.log(add(2,5));

// 2.arguments

function addNum() {
    console.log(arguments);
    console.log(arguments[1])
   
}
addNum(2,3,4,5)

//but in arrow function the keyword arguments is not avilable that is we can not use this keyword in arrow functions

// const addNum=()=>{
//     console.log(arguments);
// }
// addNum(2,3,4,5)

const addnum=(...nums)=>{
    console.log(nums);
}
addnum(2,3,4,5,6)

//3. Hosting

console.log(sum(2,3));
function sum(a,b) {
    return a+b;
}
//this is hosting that you can call anywhere in the code the output will come but in arroew functions calling the function before definng is not allowed

//4. This keyword

const obj={
    value:20 ,
   myfun:function(){
    
    console.log(this.value)
    console.log(this);
   }
}
obj.myfun()
//here the this keyword is refering the object only the colons only 

const object ={
    value:30,
    myfunction: ()=>{
        console.log(this)
        console.log(this.value);
        
        
    }
}
object.myfunction()
// arrow function is a global so here this keyword is refering the window (browser)