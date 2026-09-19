// global scope
console.log(this);
// method
let obj ={
    name: "harsh",
    sayName : function(){
        console.log(this.name);
    }
}
obj.sayName();
// function 
function abc (){
    console.log(this);
}
abc();

//event handler 
document.querySelector("h1").addEventListener("click",
    function abc (){
        console.log(this.textContent);
    }
)
// class - blank object
class ABCD{
    constructor(){
        console.log("hi");
        this.a=12;
    }
}
let val = new ABCD();
console.log(val.a);