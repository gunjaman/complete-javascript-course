// //lec 1
// let js = 'amazing';
// if (js === 'amazing') alert("JavaScript is Fun!");
// 20 + 33 - 3;
// console.log(20 + 33 - 3)

//lec 2
let js = 'amazing';
console.log(20 + 33 - 3);

console.log("SteveG");
console.log(33);

let fname = "SteveGVar";
console.log(fname);
//////////////////////////////////////////////////////////////////////////////////////////
//lec 11 datatypes
// true;
let helloWorld = true;
console.log(helloWorld);

console.log(typeof helloWorld);
console.log(typeof true);
console.log(typeof 42);
console.log(typeof 'some.string');

helloWorld = 'new value!';
console.log(typeof helloWorld);
// empty var
let varEmpty;
console.log(varEmpty);
console.log(typeof varEmpty);

//lec 12 vartypes
let myAge = 44;
yourAge = 45;

const bday = 1979;
// bday = 1990; // throws an error

// const bday1; // throws an error - initial val needed
//////////////////////////////////////////////////////////////////////////////////////////
//lec 13 Operators
const now = 2033;
const ageSteve = now - 1979;
const ageYvonne = now - 1981;
console.log(ageSteve, ageYvonne);

console.log(ageSteve * 2, ageSteve / 10, 2 ** 3);
// 2 ** 3 = 2 to the power of three

const steveFname = 'Steve';
const steveLname = 'Gerbothe';
console.log(steveFname + ' ' +  steveLname);

let x = 10 + 5;
x += 10;
console.log(x);
x *= 4;
console.log(x);
x++;
console.log(x);
x--;
x--;
console.log(x);

// compare
console.log(ageSteve > ageYvonne);
//////////////////////////////////////////////////////////////////////////////////////////
// challenge 1 
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;
// // BMI = mass / (height * height)
// const BMIMark = massMark/ (heightMark ** 2);
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// console.log(BMIMark, BMIJohn);

// const markHigherBMI = BMIMark > BMIJohn;
// console.log(BMIMark > BMIJohn);
// console.log(BMIMark, BMIJohn, markHigherBMI);
//////////////////////////////////////////////////////////////////////////////////////////
//lec 17 Strings and Template Literals
const steveFirstName = 'Steve';
const steveLastName = 'Gerbothe';
const job = 'CloudGuy'
const birthYear = 1979;
const nowYear = 2024;

const steve = 'I am ' + steveFirstName +  ' a ' + (nowYear - birthYear) + ' years old ' +  job + '!';
console.log(steve)

// Template Literals
const steveNew = `I'm ${steveFirstName} a ${nowYear - birthYear} year old ${job}`;
console.log(steveNew)

// multiple lines
console.log('String \n\
    with \n\
    multiple lines');
// using back thicks
    console.log(`String
        with
        multiple lines`);
//////////////////////////////////////////////////////////////////////////////////////////
// lec 18. Taking Decisions: if / else Statements
const age = 13;
const isOldEnough = age >= 18;

if(isOldEnough) {
    console.log('Steve is old enough');
}
// better
if(age >= 18) {
    console.log('Steve is old enough');
} else {
    const yearsToWait = 18 - age;
    console.log(`Steve is not old enough  - wait ${yearsToWait} years`);
}

// vars defined within= a block not visible
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century)
//////////////////////////////////////////////////////////////////////////////////////////
// challenge 2
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

/* Write your code below. Good luck! 🙂 */

if (BMIMark > BMIJohn) {
    console.log("Mark's BMI is higher than John's!");
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
    console.log("John's BMI is higher than Mark's!");
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}
//////////////////////////////////////////////////////////////////////////////////////////
// lec 20 Type Conversion and Coercion

// convertion
const inputYear = '1979';
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);

console.log(Number('Steve'));
console.log(typeof NaN);
console.log(String(23), 23);

// coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

//////////////////////////////////////////////////////////////////////////////////////////
// lec 21. Truthy and Falsy Values
// 5 falsy vals: 0, '', undefinded, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Steve'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money) {
    console.log("Don't spent it all! ");
} else {
    console.log("Get a damn job! ");
}