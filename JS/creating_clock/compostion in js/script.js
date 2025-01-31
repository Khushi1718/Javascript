// compose the long functions into a chotu function
function add(a,b){
    return a+b;
}
function square(val){
    return val*val;
}
function multiply(args){
    
    return args[0]*args[1]
}
// function addAndSquare(a,b){
//     return square(add(a,b));
// }
// console.log(addAndSquare(2,5))

// function composeTwoFunction(fn1,fn2){
//     return function(a,b){
//         return fn2(fn1(a,b));
//     }
// }
// const task=composeTwoFunction(add,square)

const c2f=(fn1,fn2)=>(a,b)=> fn2(fn1(a,b))
const task=c2f(add,square);
console.log(task(2,5))

function composeAll(...fns){
    return function(...values){
        return fns.reduce((a,b)=>b(a),values)
    }
}
const result=composeAll(multiply,square)
console.log(result(2,5))

const compose=(...fns)=>(...val)=>fns.reduce((a,b)=>b(a),val)
const result2=compose(multiply,square)
console.log(result2(2,5))
