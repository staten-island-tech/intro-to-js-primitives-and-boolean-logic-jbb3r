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
let stoplight = "green";
if (stoplight === "green") {
    console.log("go");
} else if (stoplight === "yellow") {
    console.log("caution");
} else if(stoplight =="red") {
    console.log("stop");
}

//milk
let kristyIntolerant = true;
let baobaoIntolerant = false;

if(kristyIntolerant === true && baobaoIntolerant === true){
    console.log("get almond milk");
} else if(kristyIntolerant === true || baobaoIntolerant === true){
    console.log("get milk and almond milk");
} else{
    console.log("get milk");
}

//cupcake

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