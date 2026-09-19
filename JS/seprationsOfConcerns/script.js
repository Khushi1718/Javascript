//DOM ka code and logic ka code alag rhena chaiye 
//separation of concerns-this is the principle of separating code into distinct sections, each responsible for a specific aspect of the application.
//  In this case, we will separate the DOM manipulation code from the business logic code to maintain clarity and improve maintainability.

const btn = document.querySelector('button');
const ul=document.querySelector('ul');
// btn.addEventListener('click',function(){
//     const m1= Math.floor(Math.random()*100);
//     const m2= Math.floor(Math.random()*100);
//     const sum=m1+m2;
//     const li=document.createElement('li');
//     li.textContent=`${m1}+${m2}=${sum}`;
//     ul.appendChild(li);
//     console.log(`The sum of ${m1} and ${m2} is ${sum}`);    
// });

//correct way 
function add(a,b){
    return a+b;
}   
btn.addEventListener('click',function(){
    const m1= Math.floor(Math.random()*100);
    const m2= Math.floor(Math.random()*100);
    const sum=add(m1,m2);
    li=document.createElement('li');
    li.textContent=sum;
    ul.appendChild(li);
    console.log(`The sum of ${m1} and ${m2} is ${sum}`);    
});

// map function -> ek array ke top per chalta hai uss array k sabhi 
// memebers us map function k ander aate hai and map function ek naya 
// array return kerata hai aur uss array m joh bhi map n return kia hoga vhi placed hota h  

const arr=[1,2,3,4,5];
function myMap(arr,callback){
    const newArr=[];
    for(let i=0;i<arr.length;i++){
        newArr.push(callback(arr[i]));
    }
    return newArr;
}
const newArr=myMap(arr,function(num){
    return num*2;
});
console.log(newArr);