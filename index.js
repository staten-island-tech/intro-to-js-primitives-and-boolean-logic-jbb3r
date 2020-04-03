/* let string = 'I am a string';
let sentence = 'Hello Angel ' + 'and Vicky';
let combine = string + sentence */
/* 
let student = 'Sandra';
let student2 = 'Gia';
let courseName = 'AP CSP';
let teacherName = 'Whalen';
let sentence = 
    student +
     ' and ' + 
     student2 +
      ' are taking ' +
       courseName +
        ' with ' +
         teacherName;
// use back tics next to 1, doesn't need spaces
let betterSentence = `${student} and ${student2} are taking ${courseName} with ${teacherName} next year`; */

///Numbers and Integers
/* let year = 2020;
let nextYear = year + 1;
let past = year / 2;
let future = year * 2;
 */

 ///Booleans
/*  let trueStatement = true; */
 
 /////Null and undefined
 //let richard;

 //Boolean Logic or if/else
 //let age = 17;
 //let baoSquared = 'Bao Bao';
 //console.log(baoSquared === 'bao Bao');
 //console.log(age == '17');
/* 
 let age = 19;
 if(age < 18){
     console.log('you are a child');
 } else if(age == 18){
     console.log('happy birth');
 } else{
     console.log('you are over 18');
 }
 */

 //help me im so confused//this is stoplight challenge
/*let stoplight = "green";
if (stoplight === "green") {
    console.log("go");
} else if (stoplight === "yellow") {
    console.log("caution");
} else if(stoplight =="red") {
    console.log("stop");
}

let kristyIntolerant = true;
let baobaoIntolerant = false;

if(kristyIntolerant === true && baobaoIntolerant === true){
    console.log("get almond milk");
} else if(kristyIntolerant === true || baobaoIntolerant === true){
    console.log("get milk and almond milk");
} else{
    console.log("get milk");
}

let temperature = 79;

if(temperature < 68) {
    console.log("too cold");
} else if(temperature >= 68 && temperature <= 72) {
    console.log("perfect");
} else if(temperature >=73 && temperature <= 76) {
    console.log("warm");
} else if(temperature >76) {
    console.log("too hot");
}

fucntion test(); {
    console.log("im a function");
}
test(); 

const add = function(x,y) {
    return x+y;
};  

add(10,20);

const hello = function () {
    console.log("hello");
};
const bye =function () {
    console.log("bye");
};
const hyBye = function() {
    hello();
    bye();
    hello();
    bye();
};
hiBye(); 

const name = "ihurushi"; 

function displayName() {
    const name ="kelly";

    function sun() {
        console.log(name);
    }
   
    return sun();
}
const myFunc =displayName();
myFunc();

const names = ["aarthi","vicky","vincent","doyle","kelly"];
names.forEach(name => console.log(el));  

const numbers = [1,2,3];
const add = function(x,y,z) {
    return x + y + z;
};
console.log(add(...numbers)); */

//Challenge 1

const names = ["Riya", "Omor", "Alan", "Jaiyu", "Michael", "Lisa","Richard"];
const choose = names.filter(name => name.length < 5);

//Challenge 2

const students = ["Riya", "Omor", "Alan", "Jaiyu", "Michael", "Lisa","Richard"];
console.log(students.includes('Junshen')); //false
 

function checkAvailability(arr, val) {
  return arr.some(arrVal => val === arrVal);
}
console.log(checkAvailability(students, 'Alan')); // true
console.log(checkAvailability(students, 'Savva')); // false
/// filter out all students whose names contain <5 characters
/* const newArr = stidemts 
    .push()
    .forEach()
    .Map();
    */

    //"includes" junshen

    //Alan or Savva included in "same"


