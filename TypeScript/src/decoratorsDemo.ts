function Helper(genericString: string){
    return function(constructor: Function){
        console.log(genericString);
        console.log(constructor);
    }
}

function AngularTemplate(template: string, hookId: string){
    return function(_: any){
        const hookEl = document.getElementById(hookId);
        if(hookEl){
            hookEl.innerHTML = template
        }
    }
}

// @Helper('Showing constructor Car:')
@AngularTemplate('<h4>This is like Angular</h4>', 'app')
class Car {
    name = 'Tata Nexon';
    constructor() {
        console.log(`Car ${this.name} created`)
    }
}

const car1 = new Car();
console.log(car1);

@Helper('Showing constructor Bike:')
class Bike {
    name = 'Hero Honda';
    constructor() {
        console.log(`Bike ${this.name} created`)
    }
}

const bike1 = new Bike();
console.log(bike1);

//Property Decorators
function Log(target: any, propertyName: string | Symbol){
    console.log('Property decorator');
    console.log(target, propertyName);
}

class Employee1{
    @Log
    title: string;
    private _fullName: string;

    constructor(title: string, name: string){
        this.title = title;
        this._fullName = name;
    }
}