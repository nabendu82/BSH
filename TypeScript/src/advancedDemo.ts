//Intersection types
type ITadmin = {
    access: string[];
}

type Employee = {
    name: string;
    startDate: Date;
    skills: string[];
}

type AdminEmployee = Employee & ITadmin;

const emp1: AdminEmployee = {
    name: 'John',
    startDate: new Date(),
    skills: ['Cisco', 'Python'],
    access: ['admin', 'user']
}

console.log(emp1);

//Type Guards
// interface Human{
//     walkingSpeed: number;
// }

// interface Horse{
//     runningSpeed: number;
// }

// type Mammal = Human | Horse;

// function moveMammal(mammal: Mammal){
//     if('walkingSpeed' in mammal){
//         console.log(`Human can walk at ${mammal.walkingSpeed} km/hr`);
//     } else {
//         console.log(`Horse can run at ${mammal.runningSpeed} km/hr`);
//     }
// }

// moveMammal({ walkingSpeed: 10 });
// moveMammal({ runningSpeed: 40 });

//Discriminated Unions
interface Human{
    type: 'human';
    walkingSpeed: number;
}

interface Horse{
    type: 'horse';
    runningSpeed: number;
}

type Mammal = Human | Horse;

function moveMammal(mammal: Mammal){
    switch(mammal.type){
        case 'human':
            console.log(`Human can walk at ${mammal.walkingSpeed} km/hr`);
            break;
        case 'horse':
            console.log(`Horse can run at ${mammal.runningSpeed} km/hr`);
            break;
    }
}

moveMammal({ type: 'human', walkingSpeed: 10 });
moveMammal({ type: 'horse', runningSpeed: 40 });

//Type Casting
const inputUser = document.getElementById('input-user')! as HTMLInputElement;

inputUser?.addEventListener('input', event => {
    const target = event.target as HTMLInputElement;
    console.log(target.value)
})

//Index Properties
interface ErrorMessages {
    [key: string]: string
}

const errorMessages: ErrorMessages = {
    name: 'Name is required',
    email: 'Email is required',
    // password: true,
}

//Function overloading
type StrOrNum = string | number;

function addElements(a: number, b: number): number;
function addElements(a: string, b: string): string;
function addElements(a: string, b: number): string;
function addElements(a: number, b: string): string;
function addElements(a: StrOrNum, b: StrOrNum){
    if(typeof a === 'string' || typeof b === 'string'){
        return a.toString() + b.toString();
    }
    return a + b;
}

const result = addElements(1, 2);
const result2 = addElements('Nabendu', ' Biswas');
const result3 = addElements('Nabendu', 2);
console.log(result);
console.log(result2);
console.log(result3);
console.log(result2.split(''));

//Nullish Coalescing
const theInput = '';
const storedInput = theInput || 'Default';
console.log(storedInput);

const theInput2 = '';
const storedInput2 = theInput2 ?? 'Default 2';
console.log(storedInput2);

const theInput3 = null;
const storedInput3 = theInput3 ?? 'Default 3';
console.log(storedInput3);