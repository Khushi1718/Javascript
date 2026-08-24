let h1 = document.querySelector("h1");

h1.innerHTML = "helloo khushii kaisi hai";
console.dir(h1);

//create an element 
//append or prepend  prepand phle append bad m  jha bhi elenet chaiye
let h2 = document.createElement("h2");
h2.textContent="heyheyhey";
// document.body.prepend(h2);
document.querySelector("body").prepend(h2);


h1.remove(); //remove element from dom

let newh1 = document.createElement("h1");
newh1.textContent = "new h1";
document.querySelector("div").appendChild(newh1);

newh1.style.color="peachpuff";
newh1.style.backgroundColor="black";

let h3 = document.querySelector("h3");
h3.classList.add("class1");
h3.classList.remove("class1");
h3.classList.toggle("class1"); // toggle ager lagi h toh hata dega verna lga dega
 