const numbers = [2, 3, 4, 5, 6, 7, 8];
// let resultInside = []
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     resultInside.push(result);
// }

                                    // map--> Array, find--> one Element , filter--> array,only the matching element;
// console.log(resultInside);

// const result = numbers.map(x => x * x);
// console.log(result);

// const bigger = numbers.filter(x  => x/2)
const isThere = numbers.find(x => x>5)
console.log(isThere);