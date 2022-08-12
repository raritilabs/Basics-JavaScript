let array = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];

let even_num = array.filter(function(value) {
    return value%2==0; });

console.log(even_num);