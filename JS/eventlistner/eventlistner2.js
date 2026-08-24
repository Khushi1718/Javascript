let p=document.querySelector("p");
// let p = document.querySelector("#main");

console.log(p); // should show <p id="main">1</p>
window.addEventListener("keydown",function(e){
    if(e.key===" "){
        p.textContent="space key pressed";
    }
    else{
        p.textContent="key pressed is "+e.key;
        console.log(e.key);
    }
});

let btn = document.querySelector("button");
let inp= document.querySelector("input");
btn.addEventListener("click",(xyz)=>{
    inp.click();
    
});
inp.addEventListener("change",(e)=>{
    console.log(e);

});
let card = document.querySelector("#card");
let form = document.querySelector("form");
let name = document.querySelector("#name");
let mail= document.querySelector("#mail");
let image = document.querySelector("#picture");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log(e);
    console.log(e.target[0].value);
    console.log(e.target[1].value);
    console.log(e.target[2].value);
    name.textContent=e.target[0].value;
    mail.textContent=e.target[1].value;
    image.src=URL.createObjectURL(e.target[2].files[0]);
    card.style.display="block";
});

// mouseover and mouseout event listener 
//mouseover is used to change the color of the text when mouse is over the text 
//mouseout is used to change the color of the text when mouse is out of the text
p.addEventListener("mouseover",()=>{
    p.style.backgroundColor="yellow";
});
p.addEventListener("mouseout",()=>{
    p.style.backgroundColor="pink";
});
p.addEventListener("mousemove",(x)=>{
    p.style.backgroundColor="red";
    console.log(x.clientX,x.clientY);
});
let cont = document.querySelector("#container");
cont.addEventListener("mousemove",(x)=>{
    
    cont.style.top = x.clientY+"px";
    cont.style.left = x.clientX+"px";
});

// eventbubbling is the process of event propagation in the DOM tree. It means that when an event is triggered on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.
let div = document.querySelector("#div");
let h2 = document.querySelector("h2");
div.addEventListener("click",()=>{
    console.log("div clicked");
});
h2.addEventListener("click",(e)=>{
    e.stopPropagation();
    console.log("h2 clicked");
}); 
//event capturing is the process of event propagation in the DOM tree. It means that when an event is triggered on an element, it first runs the handlers on its ancestors, then on its parent, then all the way down to the target element.c

grandparent.addEventListener("click", () => {
    console.log("GP capture");
}, true);

parent.addEventListener("click", () => {
    console.log("Parent bubble");
});

grandparent.addEventListener("click", () => {
    console.log("GP bubble");
});

// Grandparent capture
//         ↓
// Child
//         ↓
// Parent bubble
//         ↓
// Grandparent bubble