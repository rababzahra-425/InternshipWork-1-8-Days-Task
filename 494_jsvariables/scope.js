if (true) {
    var nameVar = "Ali";
    let nameLet = "Ahmed";
}

console.log(nameVar); // Output: Ali (Kyunke var block ke bahar aa jata hai)
console.log(nameLet); // ReferenceError: nameLet is not defined (Kyunke let block ke andar locked hai)


console.log(a); // Output: undefined (Error nahi aya!)
var a = 5;

console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;

const pi = 3.14;
pi = 3.15; // TypeError: Assignment to constant variable. (Value change nahi ho sakti)

// Lekin yaad rahe, agar const mein object ya array hai, to uske andar ki cheezein badli ja sakti hain:
const user = { name: "Zain" };
user.name = "Asad"; // Yeh allow hai! Object ka reference same rehna chahiye.