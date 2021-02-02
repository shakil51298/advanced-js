// when the output would be undefined

let birds; // ---> 1

function add(num1, num2) {
    console.log(num1 + num2);
} //---> 2
const result = add(13, 82);
console.log(result);

function add(num1, num2) {
    console.log(num1, num2);
} // ----> 3
const sum = add(13);
console.log(sum);

const lover = {
    name: "shakil",
    phone: 58587932
};
console.log(lover.gf); //---> 4

let fun = undefined;
console.log(fun); //---> 5

//null is Speicial thing(if i set a value of an property null only this the output wold be null)


let ages = [12, 21, 5] //----6
console.log(ages[11]);

function doSomething(x, y) {
    console.log(y);
}
doSomething(32);