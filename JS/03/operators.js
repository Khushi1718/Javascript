//operators
//number
let num1=20;
let num2=30;
console.log(num1+num2);
num3=num1+num2;
console.log(num3);
//strings
firstName="khushi";
lastName="nain";
console.log(firstName+" "+lastName);

// boolens, null, undefined

let loggedin=false;
console.log(loggedin);

let lastloggedin=null;  //object typeof
console.log(lastloggedin);

// undefined and null has differnece like we can put anything in null but undefined is we don not know

// objects

let khushi ={
    age:18 , 
    dob:17,
    nationality:"indian"
};
console.log(khushi);
console.log(khushi.age)

console.log("1"+"1");
console.log('1'+1);  // convert num 1 to string 
console.log("a"+1); // convert num 1 to string
console.log('12'*2); //convert string of 12 into num
console.log("a"*1);  //Nan not a numbr

//typeof operator to find the type of datatype 
console.log(typeof loggedin)
console.log(typeof lastloggedin)
console.log(typeof khushi)
console.log(typeof khushi.nationality)


