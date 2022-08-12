
let array = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];

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
const array1 = [1, 4, 9, 16];
const map1 = array1.map(a => a % 2);

console.log(map1);