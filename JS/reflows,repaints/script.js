ul=document.querySelector("ul");
const space=document.createDocumentFragment();
for(let i=0;i<100;i++){
    const li=document.createElement("li");
    li.textContent=`Item ${i+1}`;
    space.appendChild(li);
}
ul.appendChild(space);  

// that;s a good practice to use document fragment to avoid multiple reflows and repaints.

// to add too many proteries in css we must make classes and add them to the elements instead of adding them one by one.

//to avoid memory leaks we must remove the event listeners when they are not needed anymore.nd intervals too
