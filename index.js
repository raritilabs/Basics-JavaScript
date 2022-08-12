let numbers = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];

let positive_array = numbers.filter(func1);
function func1(value) {
    return value >= 10; }

console.log(positive_array);