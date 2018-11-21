//const

//"let" is block scoping
if (true)
{
    let carId = 100;
}
console.log(carId); //throws an error because carId is only valid in the if block
//"var" is global scoping
if (true)
{
    var carId = 100;
}
console.log(carId); //logs "100" because carId scope is global.

//Rest params work like args[] param in C#
//can do with multiple parameters as well. just make sure the rest param comes last
function sendCars(...allCarIds) //allCarIds will be an array
{
    allCarIds.forEach( id => console.log(id));
}
sendCars(100, 200, 555);

//Destructuring arrays
//take each element of the array and assign it to a variable
let carIds = [1, 2, 5];
let [car1, car2, car3] = carIds;
//can also do...
let remainingCars;
[car1, ...remainingCars] = carIds; //the first element goes into car1 and all remaining go to remainingCars
//can also do...
[, ...remainingCars] = carIds; //will skip the first element and all remaining go to remainingCars

//Destructuring objects
let car = { id: 5000, style: 'convertible' };
// let { id, style } = car;
//you would think that you could do below like in destructuring arrays but it actually throws an error
let id, style;
//{ id, style } = car; //curly brackets are used to indicate a block of code so the compiler is confused of whether we're starting a code block or destruturing an object
//just add parentheses around it
({ id, style } = car);

//Spread syntax - opposite of rest
function startCars(car1, car2, car3)
{
    console.log(car1, car2, car3);
}
carIds = [100, 300, 500]; //declared above
startCars(...carIds); //100 300 500
//gets weird with strings because strings are iterables
let carCodes = 'abc';
startCars(...carCodes); //a b c

//CAN USE SPREAD AND REST AT THE SAME TIME

//typeof() can be used on anything: bool, string, int, etc. Also functions, null, object, undefined, NaN

// == will do comparison by value - compiler will even try to convert types to be the same for the comparison
// === will do comparison by value AND type

//IIFE - Immediately invoked function expression
let app = (function() {
    console.log("do something");
    return { };
})();

//Closures - a way of capturing functions and variables inside an IIFE
app = (function() {
    let carId = 123;
    let getId = function() {
        return carId;
    };
    return { 
        getId: getId
    };
})();
console.log(app.getId());

//call and apply - used to change the value of "this" in a function
//apply is the same as call, except that apply will allow you to pass params
let o = {
    carId: 123,
    getId: function(prefix) {
        return prefix + this.carId;
    }
};
let newCar = { carId: 456 };
console.log(o.getId.apply(newCar, ['ID: ']));

//bind - will copy the function and change the this value
o = {
    carId: 123,
    getId: function() {
        return this.carId;
    }
};
newCar = { carId: 456 };
let newFn = o.getId.bind(newCar);
console.log(newFn());

//Arrow functions
//DO NOT HAVE THEIR OWN "THIS" VALUE
let getId = () => 123;
getId = (prefix, suffix) => prefix + 123 + suffix;
getId = (prefix, suffix) => {
    return prefix + 123 + suffix;
};

//can use default params - same as C#
//can use string interpolation
let trackCar = function(carId, city = 'NY') {
    console.log(`Tracking ${carId} in ${city}`); //**** must use backticks NOT single quotes */
};
console.log(trackCar(123));

//Constructor functions
// function Car(id) {
//     this.carId = id;
//     this.start = function() {
//         console.log('start: ' + this.carId);
//     };
// }
// let vehicle = new Car(123);
// vehicle.start();

//prototypes - keeps functions from being recreated for every object instance
// function Car(id) {
//     this.carId = id;
// }

// Car.prototype.start = function() {
//     console.log('start: ' + this.carId);
// };
// let vehicle = new Car(123);
// vehicle.start();

//JSON
// let car = {
//     id: 123,
//     name: 'convertible'
// }
// let carAsJSON = JSON.stringify(car);
// JSON.parse(carAsJSON);

// carIds = [
//     { carId: 123, style: 'sedan' },
//     { carId: 456, style: 'convertible' },
//     { carId: 789, style: 'sedan' }
// ];
// carIds.forEach(car => console.log(car));
// carIds.forEach((car, index) => console.log(car, index));
//also have
//carIds.filter == FindAll in LINQ
//carIds.every - will do an assertion on each element in the array and return true or false
//carIds.find == Find in LINQ

// class Vehicle {
//     constructor() {
//         this.type = 'car';
//     }

//     start() {
//         return `Starting: ${this.type}`;
//     }
// }

// class Car extends Vehicle{
//     constructor(id) {
//         //might have to have a super(id) constructor in vehicle
//         this.id = id;
//     }

//     identify() {
//         return `Car Id: ${this.id}`;
//     }
// }
// let car = new Car(123);
// console.log(car.start());
// console.log(car.identify());

import { Car } from './models/car.js';
// let car = new Car(123);

//window object - global object
//setTimeout - returns an id that you can give to clearTimeout
//clearTimeout
//setInterval - returns an id that you can give to clearInterval
//clearInterval
//location object - part of the BOM. info on the URL
//document object - used to reference the DOM
//returns single element
//document.getElementById
//both of these return HtmlCollection which act as an array
//document.getElementByClassName
//document.getElementByTagName

//can use try-catch-finally
//throw new Error('my custom error');

//Promise - hanldes async operations
// let promise = new Promise(
//     function(resolve, reject) {
//         setTimeout(resolve, 100, 'someValue');
//     }
// );
// promise.then(
//     //fulfilled function
//     value => console.log('fulfilled: ' + value),
//     //rejected function
//     error => console.log('rejected: ' + error)
// );

//MockApi looks handy
// import $ from 'jquery';
// let promise = $.get("an api call url");
// //same idea goes for post
// //let promise = $.post("an api call url", dataToPost);
// promise.then(
//     data => console.log('success: ', data),
//     error => console.log('error: ', error)
// );

//Forms
// let form = document.getElementById('form');
// form.addEventListener('submit', event => {
//     let user = form.elements['user'];
//     let avatarFile = form.elements['avatar-file'];

//     let posting = {
//         user: user.value,
//         avatarFile: avatarFile.value
//     };

//     let promise = $.post(
//         "apiUrl",
//         posting
//     );
//     promise.then(
//         data => console.log(''),
//         error => console.log('')
//     );
    
//     event.preventDefault();
//     // let userError = document.getElementById('user-error');

//     // if (user.value.length < 4)
//     // {
//     //     userError.textContent = 'Invalid entry';
//     //     userError.style.color = 'red';
//     //     user.style.borderColor = 'red';
//     //     user.focus();

//     //     //prevents the browser from submitting the form. can use if data is invalid
//     //     event.preventDefault();
//     // }
// });

//Security
//source code can be read from browser dev tools
//global variables can be seen from browser dev tools
//eval can open up your app to injection attacks
//can help prevent man-in-the-middle attacks by using
    //ssl
    //http header: Strict-Transport-Security
    //cookie attributes Secure and HttpOnly
