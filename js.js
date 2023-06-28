//Основы JS

//Задание №1
function getType(input) {
    return typeof input;
}
console.log(getType(5));

//Задание №2

//a
//undefined
//сначала идёт проверка условия a || b (a явл. функцией и выходит, что условие оценивается как true)
//в функции a нет указанного return, поэтому её результатом будет undefined.
//











//Функции

//Задание №1
function sumNumbers() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === "number") {
            sum += arguments[i];
        }
    }
    return sum;
}
console.log(sumNumbers(1, "2", 3, true, null));














//Объекты и Массивы

//Задание №1
function convertArrToObj(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        obj[i] = arr[i];
    }
    return obj;
}
console.log(convertArrToObj(["a", "b", "c"])); // {0: "a", 1: "b", 2: "c"}

//Задание №2
function countFromArr(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]]++;
        } 
        else {
            obj[arr[i]] = 1;
        }
    }
    return obj;
}
console.log(countFromArr(["a", "b", "c", "a", "b"])); // {a: 2, b: 2, c: 1}

//Задание №3
function groupByField(arr, field) {
    const obj = {};
    for (let i = 0; i < arr.length; i++) {
        const value = arr[i][field];
        if (obj[value]) {
            obj[value].push(arr[i]);
        } 
        else {
            obj[value] = [arr[i]];
        }
    }
    return obj;
}
const arr = [{test: 1},{test: 2},{test: 3},{test: 1},{test: 1}];
const res = groupByField(arr, 'test');
console.log(res); // { 1: [{test: 1}, {test: 1}, {test: 1}], 2: [{test: 2}], 3: [{test: 3}]}
















//Прототип, наследование

//Задание №1
function plus(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return "Error: arguments are not numbers";
    }
    return a + b;
}
console.log(plus(5, 5))













//Асинхронная работа в JS

//Задание №1

//start
//promise constructor
//final
//p2
//p4
//p5
//timeout