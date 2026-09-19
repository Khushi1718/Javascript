
const button = document.querySelector('button');
function changebutton(config){
    return function output(text){
        button.textContent = text;
        setTimeout(()=>{
           button.textContent ="Download"; 
        },config.duration*1000)
    }
}
let out = changebutton({
    positionX :"right",
    postionY :"top",
    theme:"dark",
    duration:3


});

out("downloded");




// scope - the context in which variables and expressions are evaluated
// scope v/s hoisting - scope is the context in which variables and expressions are evaluated, while hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase.
// hoisting in var let const - 
console.log(a); // undefined
var a = 5;

console.log(b);
// ReferenceError: Cannot access 'b' before initialization
let b = 10;

console.log(c);
// ReferenceError: Cannot access 'c' before initialization
const c = 15;

// hoisting in function declarations and expressions
console.log(foo()); // "Hello, World!"

function foo() {
  return "Hello, World!";
}

console.log(bar());
// TypeError: bar is not a function
var bar = function() {
  return "Hello, Universe!";
};

// scope and clouser - A Closure is a function that has access to its own scope, the outer function's scope, and the global scope. Closures are created whenever a function is defined inside another function, allowing the inner function to "remember" the variables from the outer function even after the outer function has finished executing.
// so when outer function finished nd there is a clouser js save its variables nd function create a backlink to the outer function's scope. it is called [[Scope Chain]].

// lexical scope - Lexical scope refers to the fact that in JavaScript, the accessibility of variables is determined by their physical placement in the source code. A function's scope is defined by where it is declared, not where it is called. This means that inner functions have access to variables defined in their outer functions, but not vice versa.
//example of closure and lexical scope
function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log('Outer Variable: ' + outerVariable);
    console.log('Inner Variable: ' + innerVariable);
  };
}

const newFunction = outerFunction('outside');
newFunction('inside');

// In this example, innerFunction is a closure that has access to the outerVariable defined in outerFunction, demonstrating lexical scoping.        

// encapsulation - Encapsulation is a fundamental concept in object-oriented programming that refers to the bundling of data (variables) and methods (functions) that operate on that data into a single unit, typically an object. It restricts direct access to some of an object's components, which can prevent the accidental modification of data. In JavaScript, encapsulation can be achieved using closures, classes, and modules.
//examole of encapsulation using closure
function createCounter() {
  let count = 0; // private variable

  return {
    increment: function() {
      count++;
      return count;
    },
    decrement: function() {
      count--;
      return count;
    },
    getCount: function() {
      return count;
    }
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount()); // 2
console.log(counter.decrement()); // 1  
 