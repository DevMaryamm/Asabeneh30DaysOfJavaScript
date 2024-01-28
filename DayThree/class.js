//Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = 'Maryam'
let lastName = 'Adams'
let country = 'Nigeria'
let city = 'Ilorin'
let age = 27
let isMarried = 'true'
let year = 2024
console.log(firstName, lastName, country, city, age, isMarried, year);

console.log(typeof(firstName));
console.log(typeof(lastName));
console.log(typeof(country));
console.log(typeof(city));
console.log(typeof(age));
console.log(typeof(isMarried));
console.log(typeof(year));

//Check if type of '10' is equal to 10
let stringType = '10'
let integerType = 10
if (stringType === integerType) {
    console.log('is equal to')
} else  {
    console.log('not equal to');
}

//Check if parseInt('9.8') is equal to 10
let parseInt = '9.8'
let number = 10
if (parseInt === number) {
    console.log('true');
} else {
    console.log('false');
}

//Boolean value is either true or false.
//Write three JavaScript statement which provide truthy value.
//Write three JavaScript statement which provide falsy value.

let female = true
let lightOn = true
let eating = true
console.log(female, lightOn, eating);

let male = false 
let lightOff = 0
let hungry = ''
console.log(male, lightOff, hungry);

//Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

//4 > 3
//4 >= 3
//4 < 3
//4 <= 3
//4 == 4
//4 === 4
//4 != 4
//4 !== 4
//4 != '4'
//4 == '4'
//4 === '4'
//Find the length of python and jargon and make a falsy comparison statement.

console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 == 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');
let word1 = 'python'
let word2 = 'jargon'
console.log('python'=== 'jargon');

//Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

//4 > 3 && 10 < 12
const firstResult = (4 > 3 && 10 < 12)
console.log(firstResult);

//4 > 3 && 10 > 12
let secondResult = 4 > 3 && 10 > 12
console.log(secondResult);

//4 > 3 || 10 < 12
let thirdResult = 4 > 3 || 10 < 12
console.log(thirdResult);

//4 > 3 || 10 > 12
let fourthResult = 4 > 3 || 10 > 12
console.log(fourthResult);

//!(4 > 3)
const fifthResult = !(4 > 3)
console.log(fifthResult);

//!(4 < 3) 
const sixthResult = !(4 < 3)
console.log(!(4 < 3));

//!(false)
const seventhResult = !(false)
console.log(!(false));

//!(4 > 3 && 10 < 12)
const eightResult = !(4 > 3 && 10 < 12)
console.log(!(4 > 3 && 10 < 12));

//!(4 > 3 && 10 > 12)
const ninthResult = !(4 > 3 && 10 > 12)
console.log(!(4 > 3 && 10 > 12));

//!(4 === '4')
const tenthResult = !(4 === '4')
console.log(!(4 === '4'));

//There is no 'on' in both dragon and python
 const wordOn = !('There is no on in both dragon and python');
 console.log(wordOn);

//Use the Date object to do the following activities

//What is the year today?
const now = new Date()
console.log(now.getFullYear());

//What is the month today as a number?
let month = new Date ()
console.log(month.getMonth());

//What is the date today?
let date = new Date ()
console.log(date.getDate());

//What is the day today as a number?
let day = new Date ()
console.log(day.getDay());

//What is the hours now?
let hours = new Date ()
console.log(date.getHours());

//What is the minutes now?
let minutes = new Date ()
console.log(minutes.getMinutes());

//Find out the numbers of seconds elapsed from January 1, 1970 to now.
const numOfSecs = new Date ()
console.log(numOfSecs.getTime());

//Exercises: Level 2

//Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
//Enter base: 20
//Enter height: 10
//The area of the triangle is 100

// const base = prompt("enter value for base");
// const height = prompt('enter value for height');
// const area = prompt('enter value area')
// console.log(area * base * height);

//Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
//Enter side a: 5
//Enter side b: 4
//Enter side c: 3
//The perimeter of the triangle is 12
// const a =   prompt("enter value for a");
// const b = prompt('enter value for b');
// const c = prompt('enter value for c');
// console.log(a + b + c);


//Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
// let length = +prompt('enter value for length');
// let width = +prompt('enter value for width');
// let area1 = (length*width)
// let perimeter = (2*length*width);
// console.log(`area of rectangle ${area} and perimeter ${perimeter}`);

//Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
// let pi = 3.14
// let radius = +prompt("enter value for radius");
// let areaOfCircle = pi * radius * radius
// console.log(areaOfCircle);
// let circumference = 2 *pi *radius
// console.log(circumference);

//Calculate the slope, x-intercept and y-intercept of y = 2x -2

//Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

//Compare the slope of above two questions.

//Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

//Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
// let hour = +prompt('enter value for hour');
// let ratePerHour = +prompt ("enter value for rate per hpur");
// let pay = hour * ratePerHour;
// console.log(`pay $(pay)`);

//Enter hours: 40
//Enter rate per hour: 28
//Your weekly earning is 1120

//If the length of your name is greater than 7 say, your name is long else say your name is short.
// let myName = "maryam"
// let nameLength = (myName.length);
// console.log(myName.length);
// let nLength = (nameLength>=7? 'my name is long': 'my name is short');
// console.log(nLength);

//Compare your first name length and your family name length and you should get this output.
let myFirstName = "Maryam"
let familyName = "Adams"
let myFirstNameLength = (myFirstName.length);
let familyNameLength = (familyName.length);
let bothLength = (myFirstNameLength = familyNameLength? "my firstName Maryam is longer than my family name Adams" : "no  ");
console.log(bothLength); 

//let firstName = 'Asabeneh'
//let lastName = 'Yetayeh'
//Your first name, Asabeneh is longer than your family name, Yetayeh

//Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
//let myAge = 250
//let yourAge = 25
//I am 225 years older than you.
let myAge = 27
let yourAge = 17
let ageGap = (myAge > yourAge? ` i am ${myAge - 17} years older than you` : "no") 
console.log(ageGap);

//Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
//Enter birth year: 1995
//You are 25. You are old enough to drive
//Enter birth year: 2005
//You are 15. You will be allowed to drive after 3 years.
let userAge = +(prompt ("enter birth year"));
if (userAge > 18) {
    console.log("you are old enough to drive");
} else {
    console.log(`you are ${userAge}, you will be allowed to drive after ${18 - userAge} years`);
}

//Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
//Enter number of years you live: 100
//You lived 3153600000 seconds.
//Create a human readable time format using the Date time object
let secondsInSeconds = 60;
let secondsInHours = secondsInSeconds * 60;
let secondsInDay = secondsInHours *24;
let secondsInYears = secondsInDay *365;
let yearsCanLive = Number(prompt("number of years you live"));
let secondsOld = yearsCanLive * secondsInYears
console.log( `${secondsOld}`);

//Exercises: Level 3
//Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
//YYY-MM-DD HH:mm eg. 20120-01-02 07:05
//YYYY-MM-DD HH:mm
//DD-MM-YYYY HH:mm
//DD/MM/YYYY HH:mm




