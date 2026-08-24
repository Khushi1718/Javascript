//variables
// var ,let,const
// var=global
// winodw mwi add hota hai , Scoped to functions, not blocks
// Can be redeclared and reassigned
// Hoisted to the top with undefined value
// var age=22;
// console.log(age);
// age="khushi"
// console.log(age);

// if (true){
//     age=33;
//     console.log(age);
// }

// console.log(age);

//let =local ,Scoped to blocks ( {} )
//Can be reassigned but not redeclared
// Hoisted, but stays in the Temporal Dead Zone (TDZ)

let age=14;
console.log(age);
if (true){
    let age=12;
    console.log(age);
}
console.log(age);

//const =local
// if you assign a value to a variable of const you can't change it 
// Scoped to blocks
// Cannot be reassigned or redeclared
// Value must be assigned at declaration
// TDZ applies here too
// const age=20;
// console.log(age);
// const age=30;  // error will be 'age' is already assigned!
// console.log(age);
name="khushi"; 
console.log(name); // name is undefined but it will not give error because we have not declared it with var,let,const

//data types
let user = {
    id: 101,
    name: "Khushi"
};

// user.id = 999;

// console.log(user.id);
const id = Symbol("id");

user[id] = 999; // Using a Symbol as a property key

console.log(user[id]);
console.log(user);