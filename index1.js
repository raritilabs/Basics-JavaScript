//shallow deeping: Using spread operator
const data = [1, 2, 8 ,[3, 4, 6] ]
const dataCopy = { ...data }
data[3][0] = 10;
data[3][1] = 11;

console.log(data)
console.log(dataCopy)