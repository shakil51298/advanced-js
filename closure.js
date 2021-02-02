// A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function's variables — a scope chain. ... it has access to its own scope — variables defined between its curly brackets. it has access to the outer function's variables. it has access to the global variables

function stopWatch() {
    let count = 0;
    return function name(params) {
        count ++ ;
        return count;
    }
}
const clock1 = stopWatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());
const clock2 = stopWatch()
console.log(clock2());
console.log(clock2());
console.log(clock2());
console.log(clock2());
console.log(clock2());
console.log(clock2());
console.log(clock1());
console.log(clock1());
console.log(clock1());