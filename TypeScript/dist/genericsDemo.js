"use strict";
//Array Type
const occupation = [];
//Promise type
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let num = Math.random();
        num > 0.5 ? resolve('It is success') : reject('It is Fail');
    }, 1000);
});
promise.then(data => console.log(data.split('')))
    .catch(err => console.log(err));
//Generic Function
function mergeObject(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
// const merged = mergeObject({ name: 'John'}, 30)
const merged = mergeObject({ name: 'John' }, { age: 30 });
console.log(merged);
//Generic Classes
class StoreData {
    constructor(data) {
        this.data = data;
    }
    removeData(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getData() {
        return this.data;
    }
}
const stringData = new StoreData(['John', 'Doe', 'Smith']);
const numberData = new StoreData([34, 45, 66]);
stringData.removeData('Doe');
console.log(stringData.getData());
console.log(numberData.getData());
//Generic Utility
const family = ['Nabendu', 'Shikha', 'Hriday'];
// family.push('Raj');
// family.pop();
