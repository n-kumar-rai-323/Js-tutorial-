// Immediately invoked function expression 
(function acer(){
    console.log('DB connected');
})()

// Yes, Immediately Invoked Function Expressions (IIFEs) are commonly used to avoid global scope pollution in JavaScript. Here's how and why they help:

// What is Global Scope Pollution?
// In JavaScript, variables declared in the global scope are accessible everywhere, which can lead to:
// Naming collisions: Different scripts might unintentionally overwrite each other's variables or functions.
// Unintended behavior: Modifications to global variables can cause bugs that are hard to trace.

// Yes, Immediately Invoked Function Expressions (IIFEs) are commonly used to avoid global scope pollution in JavaScript. Here's how and why they help:

// What is Global Scope Pollution?
// In JavaScript, variables declared in the global scope are accessible everywhere, which can lead to:
// Naming collisions: Different scripts might unintentionally overwrite each other's variables or functions.
// Unintended behavior: Modifications to global variables can cause bugs that are hard to trace.
// How IIFEs Help
// An IIFE is a function that is executed immediately after it is defined. It creates a new scope for the code it encloses, thus preventing variables and functions from being added to the global scope.

// Syntax
// javascript
// Copy code
// (function() {
//     // All variables and functions declared here are scoped to this function
//     var localVariable = "I'm local to this IIFE!";
//     console.log(localVariable);
// })();
// Or, with arrow functions:

// javascript
// Copy code
// (() => {
//     let localVariable = "I'm local to this IIFE!";
//     console.log(localVariable);
// })();
// Key Features
// Encapsulation:

// Variables and functions inside an IIFE are not accessible outside of it.
// javascript
// Copy code
(function() {
    var privateVar = "hidden";
})();
// console.log(typeof privateVar); // undefined
// Avoids Global Pollution:

// Without an IIFE:
// javascript
// Copy code
var globalVar = "I'm global!";
console.log(globalVar); // Accessible everywhere
// With an IIFE:
// javascript
// Copy code
(function() {
    var localVar = "I'm local!";
    console.log(localVar); // Accessible only inside IIFE
})();
// console.log(typeof localVar); // undefined
// Useful in Modular Design:

// IIFEs can simulate modules by isolating code, especially before ES6 modules became standard.
// Example in Practical Use
// IIFEs are often used in situations like:

// Encapsulation in libraries or frameworks:

// javascript
// Copy code
(function() {
    var libraryVar = "Private";
    window.myLibrary = {
        getVar: function() {
            return libraryVar;
        }
    };
})();

// console.log(myLibrary.getVar()); // "Private"
// Loop Variable Binding:

// javascript
// Copy code
for (var i = 0; i < 3; i++) {
    (function(index) {
        setTimeout(() => {
            console.log(index); // 0, 1, 2
        }, 1000);
    })(i);
}
// Conclusion
// IIFEs are an effective way to avoid global scope pollution and ensure that variables remain localized, helping maintain clean, conflict-free code.