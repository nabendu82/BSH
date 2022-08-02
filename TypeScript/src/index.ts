//Numbers
let myNum = 10;
let anotherNum: number = 20;

myNum = 12;
myNum = '12';

anotherNum = 30;
anotherNum = true;

//String
let myStr: string = 'Hello';
let anotherStr = 'World';

myStr = true;
anotherStr = 45;

//Boolean
let myBool: boolean = true;
let anotherBool = false;

myBool = 'true';
anotherBool = 56;

//Inference
let salary: number;
salary = 12000;
salary = '12000';
salary = true;

//Objects
const developer = {
    firstName: 'Nabendu',
    lastName: 'Biswas',
    age: 40,
    isTrainer: true
}

const newDevloper: { name: string; age: number; isDev: boolean; } = {
    name: 'Mousam',
    age: 39,
    isDev: true
}

newDevloper.name = 'Mousam Mishra';
newDevloper.age = 'Forty';
newDevloper.firstName = 'Mousam';

//Arrays
const languages = ['React', 'Angular', 'Vue'];

languages.push('TypeScript');
languages.push(34);
languages.push(true);

const numbers: number[] = [41, 22, 33];

numbers.push('TypeScript');
numbers.push(34);
numbers.push(true);

//Complex Arrays
const arrOfObj: { name: string; age: number }[] = [
    { name: 'Nabendu', age: 40 },
    { name: 'Mousam', age: 39 }
];

arrOfObj.push({ name: 'Shikha', age: 39 });
arrOfObj.push({ name: 'Hriday', age: 'Eight' });

const arrOfArrays: number[][] = [
    [11, 32, 43],
    [34, 75, 64]
];

//Functions
const addNums = (num1, num2) => {
    return num1 + num2;
}

addNums(10, 20);
addNums(10, '20');

const multiNums = (num1: number, num2: number) => {
    return num1 * num2;
}

multiNums(10, 20);
multiNums(10, '20');

const modNums = (num1: number, num2: number): number => {
    // return num1 % num2;
    return num1 > num2;
}

modNums(10, 20);
modNums(10, '20');

const printSum = (num1: number, num2: number): void => {
    console.log(num1 + num2);
}

printSum(10, 20);
printSum(10, '20');

//Union Types
let numOrStr: number | string;
numOrStr = 10;
numOrStr = 'Ten';

let arr: (number | string)[] = [10, 'Ten', true];

//Literal Types
let myLiteral: 'Nabendu' | 'Shikha' | 'Hriday' = 'Nabendu';

myLiteral = 'Shikha';
myLiteral = 'Hriday';
myLiteral = 'Mousam';

//Enum
enum Role { ADMIN, READ_ONLY, AUTHOR };

const myRole = Role.ADMIN;
const userRole: Role = Role.AUTHOR;

//Optionals
let optionalObj: { name: string; age: number | undefined} = {
    name: 'Nabendu',
    age: undefined
}

let betterOptObj: { name: string; age?: number} = {
    name: 'Nabendu'
}

//Interfaces
interface Developer {
    name: string;
    age: number;
    isDev: boolean;
}

const person1: Developer = {
    name: 'Nabendu',
    age: 40,
    isDev: true
}

const person2: Developer = {
    name: 'Mousam',
    age: 36,
    isDev: true
}

//Types
type DeveloperType = {
    name: string;
    age: number;
    isDev: boolean;
}

const person3: DeveloperType = {
    name: 'Nabendu',
    age: 40,
    isDev: true
}

type PersonName = string;
const person4: PersonName = 'Nabendu';

type CoderType = {
    name: string;
    category: 'frontend' | 'backend' | 'devops';
    age: number
}[];

const coder1: CoderType = [
    { name: 'Nabendu', category: 'frontend', age: 39 },
    { name: 'Mousam', category: 'devops', age: 39 },
]

//Classes
class CreateRoom {
    private family: string[] = [];
    readonly dobShikha: string = '1982-12-12';
    private readonly dobHriday: string = '2013-12-12';

    constructor(public room: string){}

    addFamilyMember(member: string){
        this.family.push(member);
    }

    showFamily(){
        console.log(this.family);
    }

    cleanRoom(soap: string){
        console.log(`Cleaning ${this.room} with ${soap}`);
    }
}

const nabendu = new CreateRoom('Nabendu');
nabendu.family;
nabendu.addFamilyMember('Nabendu');
nabendu.addFamilyMember('Shikha');
nabendu.addFamilyMember('Hriday');
nabendu.cleanRoom('Lizol');
nabendu.dobShikha;
nabendu.dobShikha = '1982-11-12';
nabendu.dobHriday;
