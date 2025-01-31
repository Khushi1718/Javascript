// function makeFun(){
//     const name="Khushi Nain"
//     function displayName(){
//         console.log(name)
//     }
//     displayName()
    
// }
// makeFun();

// function makeFun(){
//     const name="Khushi Nain"
//     function displayName(){
//         console.log(name)
//     }
//     return displayName()
    
// }
// makeFun();

function makeFun(){
    const name="Khushi Nain"
    function displayName(){
        console.log(name)
    }
    return displayName   
}
const result= makeFun();
result()

//Uses 
// 1.Adder
function adder(a){
    function add(b){
        console.log(a+b);
    }
    return add;
    
}
const sum=adder(5);
sum(10);
sum(5);

myName=document.getElementById("name")
function size_changer(a){
    function size(){
        myName.style.fontSize= `${a}px`;
        
    }
    return size;

}

const size10=size_changer(10)
const size30=size_changer(30)


const btn=document.getElementById("button")
btn.addEventListener("click",size30)

//counter
function makeCounter(){
    count=1;
    function counter(){
        console.log(count++);
    
    }
     return counter
}
const counter1=makeCounter()
counter1()
counter1()
counter1()
counter1()


