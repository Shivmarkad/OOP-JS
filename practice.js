//write a program to display the middle element of an array

const arr = [2,34,5,45,78,23]

console.log(arr[parseInt(arr.length/2)])

//print elements after mid

let ele = arr.slice(parseInt(arr.length/2))
console.log(ele)

//access array element
const arr2 = [2,[34,[5,45],78],23]

console.log(arr2[1][1][0])


