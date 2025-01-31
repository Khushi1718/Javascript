//high order function 
// the function which accepts a function as an argument 

function sum(a,b,cb){
    result= a+b;
    cb(result);
}
// sum(2,3,function(val){
//     console.log(val)
// })

//OR

// sum(2,5,(val)=>{
//     console.log(val)
// })

sum(2,7,val=>console.log(val))

//here the cb is call back function


//we can return a function ---

// function mul(a,b){
//     result=a*b;
//     return function(){
//         console.log(a*b)
//     }}
// finalresult=mul(2,5)
// finalresult()

function mul(a,b){
    result=a*b;
    return ()=> console.log(result)

}
finalresult=mul(2,5);
finalresult()