// DOM=document object model
// h1 title etc these are dom elements
alert("Do you wan to continue?");
prompt("what your name ?")
country_name=prompt("where are you from ?","India");
console.log("country name is :",country_name);
console.log(document)
console.log(document.title)
document.title="abd";
console.log(window.document.title) //we changed our dom by javscript 
document.write("By khushi nain")

// WE CAN USE getElementById,getElementByTagName,getElementsByClassName,querySelector,querySelectorAll to acess the dom elements
let abc = document.getElementById("abc");
console.log(abc);