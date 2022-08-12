
//filter() function

let array = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];

let even_num = array.filter(function(value) {
    return value%2==0; });

console.log(even_num);

//using arrow function

let newArr = [100,25,34,13,1,0];

let even_number = newArr.filter(value => value%2==0);
    
console.log(even_number);

//map() function

let numbers = [2,4,6,8,10];
 let newArray = numbers.map(func1);
 function func1(value){
    return value + 2;
 }
 console.log(newArray);

 //reduce() function
 
 const sum = numbers.reduce((initialValue,currentValue) => initialValue+currentValue, 5 );
 console.log(sum);

//spread() operator
//combining array
const arr1 = ["Parvi",21];
const arr2 = [3,5,2001];
const numbersCombined = [...arr1, ...arr2];
console.log(numbersCombined);
//
function add(a, b, c) {
    return a + b + c;
  }
  
  const number = [3,5,7];
  
  console.log(add(...number));
  //rest operator()
  function product(...theArgs) {
    let ptotal = 10;
    for (const arg of theArgs) {
      ptotal *= arg;
    }
    return ptotal;
  }
  
  console.log(product(1,2,3));
  console.log(product(2,2,2,2));
  