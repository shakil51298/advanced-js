// --------------> Falsy value
//value = undefined; --> false;
//let age; --> false;
// value = 0; --> false
// value =null --> false
// value = ''; --> false
// value =NaN(not a number); --> false
// value =false; --> false

// --------------> truthy 
// value ='0'; --> true
// value =' '; --> true white space
// value =[]; --> true empty arry
// value ={}; --> true without object
// value ='false'; --> true without object
let age = {};
if (age) {
    console.log("Condition is true");
}
else{
    console.log("Condition is flase");
}

const ages = 0;   // age = 0; then it will go to the else condition.
if (ages) {
    console.log("Condition is true");
}
else{
    console.log("Condition is flase");
}