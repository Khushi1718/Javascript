let p = document.querySelector("p");
p.addEventListener("click",Listener);
function Listener() {
   
        p.style.backgroundColor="peachpuff";
        p.style.color="orange";
        p.style.fontSize="30px";
    
}
p.removeEventListener("click",Listener);

// let say we have a input field and i want to get data what user typed in that using event lsitener
let input = document.querySelector("input");
// input.addEventListener("input",function(data){
//     console.log(data.target.value); or data.data
//     console.log(data);
// })
let button = document.querySelector("button");
button.addEventListener("click",()=>{
    console.log(input.value);
})
//data is the value came inside the input field and data.target.value is the value of the input field
let h1 = document.querySelector("h1");
let select = document.querySelector("select");
select.addEventListener("change",()=>{
    h1.textContent = "selected";
    console.log(select.value);
})