// Immediately invoked function expression


// (function add(a,b){
//     console.log(a+b);
// })(2,3);   //immediately called a function


// ( ()=>console.log("hey khushi!"))()

(function multiply(p,q){
    let age=39;
    console.log(p*q);
    console.log(age);
})(2,4)


//to execute async fn
// let data
// async function toGetData(){
//     data= await fetch()
// }
// toGetData()

// const data=( async()=> await fetch())()

//module pattern

const atm=( function c_balance(current_balance){
    let balance=current_balance;
    function withdraw(amt){
        if (amt>balance){
            console.log("are you kidding?!");
        }
        else{
            balance-=amt
            return balance
        }
    }
    return {withdraw}
})(1000)
console.log(atm.withdraw(100))