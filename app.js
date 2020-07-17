//  var x = 14;
//   x = 12;
//  console.log(x);

// // ES6 Scoping
// function adult6(age) {
//     if (age > 18) {
//       var status = 'adult';
//     }
//     console.log(status); //ReferenceError: status is not defined
//   }
//   adult6(20);

// console.warn('this is a warning');

//var let and const
//var is always globally scoped.

//Premitive datatypes
// let score = 23;

// score = 10;
// console.log(score);

// const name = 'yaseen';
// const age = 23;
// const isCool = true;
// const GPA = 3.28; // it is a decimal
// const x = null;
// const y = undefined;
// let z;

// console.log(typeof(z));

//JS Strings

//String Concatenation
// const myInfo = (`My name is ${name} and i am ${age} years old`);
// console.log(myInfo);

//some string properties
// const mystr = 'Yaseen saleem';
// // console.log(mystr.substring(0,6).toUpperCase());
// console.log(mystr.split(''));

// const JsFrame = 'angular,react,node';
// console.log(JsFrame.split(','));

//JS Arrays

 const fruits = ['apples','oranges','mangoes', 4];
console.log(fruits[2]);
//arrays start from 0 index

//add at the end
fruits[1] = 'banana';
console.log(fruits);

// fruits.push('Watermeloon');
// console.log(typeof(fruits));

// const person = {
//     name : 'yaseen',
//     fatherName : 'saleem',
//     Qualification : 'BSCS',
//     Hobbies : ['gaming','seasons','snooker'],
//     address : 
//     {
//         state: "Punjab",
//         City: "Lahore",
//         Town: "Iqbal Town"
//     }
// }
// // console.log(person.address.City);

// const {name , fatherName} = person;
// console.log(name);



