sayHi(); 

function sayHi() {
    console.log("Hi!");
}


const multiply = function(a, b) {
    return a * b;
};

// Call variable ke naam se hoga
console.log(multiply(2, 3)); // 6



// ERROR! Cannot access 'sum' before initialization

const sum = function(a, b) {
    return a + b;
};

console.log(sum(5, 5)); 


// Super short syntax
const square = x => x * x; 

console.log(square(4)); // 16



const person = {
    name: "Rabab",
    sayName: function() {
        console.log(this.name); // 'this' points to 'person' object
    }
};
person.sayName(); // Output: Rabab