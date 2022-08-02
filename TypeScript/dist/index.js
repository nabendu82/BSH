"use strict";
//Numbers
let myNum = 10;
let anotherNum = 20;
myNum = 12;
myNum = '12';
anotherNum = 30;
anotherNum = true;
//String
let myStr = 'Hello';
let anotherStr = 'World';
myStr = true;
anotherStr = 45;
//Boolean
let myBool = true;
let anotherBool = false;
myBool = 'true';
anotherBool = 56;
//Inference
let salary;
salary = 12000;
salary = '12000';
salary = true;
//Objects
const developer = {
    firstName: 'Nabendu',
    lastName: 'Biswas',
    age: 40,
    isTrainer: true
};
const newDevloper = {
    name: 'Mousam',
    age: 39,
    isDev: true
};
newDevloper.name = 'Mousam Mishra';
newDevloper.age = 'Forty';
newDevloper.firstName = 'Mousam';
//Arrays
const languages = ['React', 'Angular', 'Vue'];
languages.push('TypeScript');
languages.push(34);
languages.push(true);
const numbers = [41, 22, 33];
numbers.push('TypeScript');
numbers.push(34);
numbers.push(true);
//Complex Arrays
const arrOfObj = [
    { name: 'Nabendu', age: 40 },
    { name: 'Mousam', age: 39 }
];
arrOfObj.push({ name: 'Shikha', age: 39 });
arrOfObj.push({ name: 'Hriday', age: 'Eight' });
const arrOfArrays = [
    [11, 32, 43],
    [34, 75, 64]
];
//Functions
const addNums = (num1, num2) => {
    return num1 + num2;
};
addNums(10, 20);
addNums(10, '20');
const multiNums = (num1, num2) => {
    return num1 * num2;
};
multiNums(10, 20);
multiNums(10, '20');
const modNums = (num1, num2) => {
    // return num1 % num2;
    return num1 > num2;
};
modNums(10, 20);
modNums(10, '20');
const printSum = (num1, num2) => {
    console.log(num1 + num2);
};
printSum(10, 20);
printSum(10, '20');
//Union Types
let numOrStr;
numOrStr = 10;
numOrStr = 'Ten';
let arr = [10, 'Ten', true];
//Literal Types
let myLiteral = 'Nabendu';
myLiteral = 'Shikha';
myLiteral = 'Hriday';
myLiteral = 'Mousam';
//Enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
const myRole = Role.ADMIN;
const userRole = Role.AUTHOR;
//Optionals
let optionalObj = {
    name: 'Nabendu',
    age: undefined
};
let betterOptObj = {
    name: 'Nabendu'
};
const person1 = {
    name: 'Nabendu',
    age: 40,
    isDev: true
};
const person2 = {
    name: 'Mousam',
    age: 36,
    isDev: true
};
const person3 = {
    name: 'Nabendu',
    age: 40,
    isDev: true
};
const person4 = 'Nabendu';
const coder1 = [
    { name: 'Nabendu', category: 'frontend', age: 39 },
    { name: 'Mousam', category: 'devops', age: 39 },
];
