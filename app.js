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

//  const fruits = ['apples','oranges','mangoes', 4];
// console.log(fruits[2]);
//arrays start from 0 index

//add at the end
// fruits[1] = 'banana';
// console.log(fruits);

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
// person.Email = "yaseensaleem48@gmail.com";
// //JS Proxies
// const {name , fatherName, address:{City}} = person;
// console.log(person.address.Town);




//JS Hoisting//
// hoisted(); // Output: "This function has been hoisted."

// function hoisted() {
//   console.log('This function has been hoisted.');
// };

//Function Expressions//

// expression(); //Output: "TypeError: expression is not a function

// var expression = function() {
//   console.log('Will this work?');
// };

//**Array of objects* */


const toDos = [
    {
    id : 1,
    text : 'Learn ES6',
    isCompleted : "true"
    },
    {
    id : 2,
    text : 'Meeting with manager',
    isCompleted : "true"
    },
    {
    id : 3,
    text : 'Start jira Project',
    isCompleted : "true"
    }
];

//print todos array using arrow functions
//toDos.forEach((todo) => console.log(todo));




//task is to get the text of task with id 2
//to do this you have to make proxy handler for this 

//console.log(toDos[1].text);
//convert JS Object in JSON to be used as API's or for server side programming
// const todoJSON = JSON.stringify(toDos);
// console.log(todoJSON);

// for (let i = 0; i < 10 ; i++)
// {
//     console.log(`For Loop number ${i}`);
// }

// for (let i = 0 ; i <toDos.length; i++)
// {
//     console.log(toDos[i].text);
// }

// for(let todo of toDos)
// {
//     console.log(todo.text)
// }


///*****Issues in this code snippet */
// const toDoCompleted = toDos.filter(function(todo)
// {
// return todo.isCompleted == true;
// }).map(function(todo)
// {
// return todo.text;
// });
// console.log(toDoCompleted);

///*****Issues in this code snippet closed*/

//**Functions */
// function addNumbers(num1,num2)
// {
//     return(num1 + num2);
// }
// console.log(addNumbers(1,2));


//Arrow functions//

// const addNumbers = (num1, num2) => (num1 + num2);

// console.log(addNumbers(5,5));

function Person (firstName, lastName, dob)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
    this.getBirthYear = function(){
        return this.dob;
    }
    this.getFullName = function(){
        return `${firstName} ${this.lastName}`;
    }
}

//Instantiate object using constructor Function
const person1 = new Person("yaeen","saleem",'14-02-1997');
console.log(person1.getBirthYear());
console.log(person1.getFullName());
console.log(person1);

