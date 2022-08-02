"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Helper(genericString) {
    return function (constructor) {
        console.log(genericString);
        console.log(constructor);
    };
}
function AngularTemplate(template, hookId) {
    return function (_) {
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
            hookEl.innerHTML = template;
        }
    };
}
// @Helper('Showing constructor Car:')
let Car = class Car {
    constructor() {
        this.name = 'Tata Nexon';
        console.log(`Car ${this.name} created`);
    }
};
Car = __decorate([
    AngularTemplate('<h4>This is like Angular</h4>', 'app')
], Car);
const car1 = new Car();
console.log(car1);
let Bike = class Bike {
    constructor() {
        this.name = 'Hero Honda';
        console.log(`Bike ${this.name} created`);
    }
};
Bike = __decorate([
    Helper('Showing constructor Bike:')
], Bike);
const bike1 = new Bike();
console.log(bike1);
//Property Decorators
function Log(target, propertyName) {
    console.log('Property decorator');
    console.log(target, propertyName);
}
class Employee1 {
    constructor(title, name) {
        this.title = title;
        this._fullName = name;
    }
}
__decorate([
    Log
], Employee1.prototype, "title", void 0);
