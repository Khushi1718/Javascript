//localstorage : aapke browser ke ander data store karne jo ki browser band hone per delete nhi hoga 

//sessionstorage : aapke browser ke ander data store karne jo ki browser band hone per delete hoga 

//cookies : aapke browser ke ander data store karne jo ki browser band hone per delete hoga 
// aapka dat abrowser ke cookies naam ki property me save hta hai and ye cookie concept kam data yah light data k lie hoti hai 

localStorage.setItem("name", "khushi");
let name = localStorage.getItem("name");
console.log(name); // Output: khushi

// set = store 
// getItem = fetch 
// removeItem = delete
// setItem = change/update

sessionStorage.setItem("sessionName", "khushi");
// setItem = to set item 
// getItem = to get item
// deleteItem = to delete item
// removeItem = to remove item
// setItem = to update item
sessionStorage.clear(); // clear all items in session storage

document.cookie = "email=khushi@example.com";
// editThisCookie = to edit cookie 
document.cookie="age=25; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";

// localstorage mei mne string ki jgh kuch bhi stor ekrne ki kososih ki toh nhi hoga
localStorage.setItem("user", { name: "khushi", age: 25 }); // This will not work as expected
let user = localStorage.getItem("user");
console.log(user); // Output: [object Object]

// To store an object in localStorage, you need to convert it to a JSON string first
localStorage.setItem("user", JSON.stringify({ name: "khushi", age: 25 }));
let userString = localStorage.getItem("user");
let userObject = JSON.parse(userString);
console.log(userObject); // Output: { name: "khushi", age: 25 }


if(window.matchMedia("(prefers-color-scheme: dark)").matches){
    document.body.classList.add("dark-mode");
}else{
    document.body.classList.remove("dark-mode");
}
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
    if (event.matches) {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
});