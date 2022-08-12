
let array = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];  //common array
//using filter function: prints the array elements that satisfy the condition
let even_num = array.filter(function(value) {
    return value%2==0; });

console.log(even_num);

let numbers = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];

let positive_array1 = numbers.filter(func1);
function func1(value) 
{
    return value >= 10; 
}

console.log(positive_array1);
//using map function: prints particular array elements that meets the condition
const map1 = positive_array1.map(a => a % 2);

console.log(map1);
//using reduce function: can do a particular action on array elements and prints the final result
const diff = array.reduce((prevVal, curVal) => prevVal + curVal,3);
console.log(diff);
//using reduce function: It  allows a function to accept an indefinite number of arguments as an array

