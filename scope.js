// // Hoisting is JavaScript's default behavior of moving declarations to the top.If a developer doesn't understand hoisting, programs may contain bugs (errors).
// To avoid bugs, always declare all variables at the beginning of every scope.
// Since this is how JavaScript interprets the code, it is always a good rule.-->def
// block scope/ global scope/local or funtion

// const add = (Number1, Number2) => result = Number1 + Number2;
// const output = add(75, 3)
// if (result < 5) {
//     var mood = "fanky";
//     mood = "crazy";
//     console.log(mood);

// }
// console.log(output);

function sum(num1, num2) {
    const result = num1 + num2;
    if (result > 5) {
        var mood = "happy"
        mood = "crazy"
        // console.log(mood);

    }

    return result
}
let dd = sum(4, 5)
const day = "friday"
console.log(day);
// const day = "friday"
console.log(dd);