// Week 7 homework - Step 1
// rewrite this program using map and filter
let numbers = [1, 2, 3, 4];
// let newNumbers = [];
let newNumbers = numbers
    // throw the even numbers
    .filter( (nr) => numbers[nr] % 2 === 0)
    // double the odd numbers
    .map( (nr) => nr * 2);

console.log('------Step 1------' + '\n' +"The doubled numbers are",
    newNumbers[0] + ' and ' + newNumbers[1] +
    '\n' + '------------------');