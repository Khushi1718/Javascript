let form = document.querySelector("form");
let name = document.querySelector("#name");
let short = document.querySelector("#short");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(name.value.length<=2){
        short.style.display="block";
        short.style.color="red";        
    }
    else{
        short.style.display="none";
    }
});