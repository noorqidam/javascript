// const array1 = [1,2,3,4];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;
//
// console.log(array1.reduce(reducer))
// console.log(array1.reduce(reducer, 5))

//Array Reduce Right
const array1 = [[0,1],[2,3],[4,5]].reduceRight(
(accumulator, currentValue) => accumulator.concat(currentValue)
);
console.log(array1)
