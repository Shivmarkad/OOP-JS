// let arr = [
//   {
//     name: "shiv",
//     age: 23,
//   },
//   {
//     name: "ravi",
//     age: 24,
//   },
//   {
//     name: "rajesh",
//     age: 21,
//   },
//   {
//     name: "Sachin",
//     age: 20,
//   },
// ];



// let newAr = [1,2,3,4,5,5];
// newAr = arr;

// let ind = newAr.indexOf(4);

// // arr.forEach((ent) => {
// //   console.log(ent);
// //   if (ent.age > 22) {
// //     let ind = newAr.indexOf(ent);
// //     newAr.splice(ind, 1);
// //   }
// // });


// arr = newAr;
// console.log(ind)

let arr = [
    {
        name: "shiv",
        age: 23,
    },
    {
        name: "ravi",
        age: 24,
    },
    {
        name: "rajesh",
        age: 21,
    },
    {
        name: "Sachin",
        age: 20,
    },
];

let newArray = []

arr.forEach((data, i) => {

    if (data.age <= 22) {

        newArray.push(arr[i])

    }

})

arr = [...newArray]

console.log("newArray------>", arr)