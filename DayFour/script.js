// Exercises: Level 1
// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
// Enter your age: 30
// You are old enough to drive.
// Enter your age:15
// You are left with 3 years to drive.

let userAge = +prompt("Enter your age")
if (userAge>18){
    console.log("you are old enough to drive");

} else {
let Ageleft = ( 18-userAge)
console.log( ` you are left with ${Ageleft} years to drive` );
 
}


// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
// Enter your age: 30
// You are 5 years older than me.
let  myage = 30
let yourAge = +prompt("Enter your age")
if (yourAge<=30){
    console.log(`i am older`);
}else{
    let bothage=(yourAge - myage)
console.log( ` you are  ${bothage} years older than me` );

}


// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
// using if else
// ternary operator.
//   let a = 4
//   let b = 3
//   4 is greater than 3
let a = 4
let b = 3
if (a>b){
    console.log(`${a} is greater than ${b}`);
}else{
    console.log(`${a}  is less than ${b}`);

}
// ternary operator
let aa = 4
let bb = 3
console.log((aa>bb)?`${aa} is greater than ${bb}` :`${bb}  is less than ${bb}` );

// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
// Enter a number: 2
// 2 is an even number
// Enter a number: 9
// 9 is is an odd number.
const number=prompt("do you wish to know if its  even or odd number")
 if (+number%2===0) {
console.log(`${number} is even number`);
 }
 else {
    console.log(`${number} is old number`);
 }


// Exercises: Level 2
// Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F
let score= +prompt("enter your score")
switch(true) {
      case score > 80:
        console.log("A");
        break;
        case  score >70 :
        console.log("B");
        break;
        case  score <60 :
        console.log("D");
        break;
        case score < 50 :
        console.log("D");
        break;
        case score >50:
        console.log("F");
        break;
         default:
    console.log('Entered value was not a number');
}


// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer
// let  season=  " Autumn, Winter, Spring , Summer"

let month = prompt("enter month to check seasons")
let input = month.toLowerCase()
switch (month) {
    case "september":
    case "october":
    case "November":
     console.log("the season is Autumn");
        break;
        case "december":
            case "january":
            case "febuary":
          console.log(" the season is Winter");
        break;
        case "march":
            case "april":
            case "may":
        console.log("the season isSpring");
        break;
        case "june":
            case "july":
            case "august":
            console.log("the season is Summer");
            break;
    default:
        console.log('Entered value was not a month');
}

// Check if a day is weekend day or a working day. Your script will take day as an input.
//     What is the day  today? Saturday
//     Saturday is a weekend.
//     What is the day today? saturDaY
//     Saturday is a weekend.
//     What is the day today? Friday
//     Friday is a working day.
//     What is the day today? FrIDAy
//     Friday is a working day.
let day= prompt('What day is today ?')

switch (day) {
  case 'saturday':
    console.log('Saturday is a weekend')

    break;
  case 'Saturday':
    console.log('Saturday is a weekend')
    

    break;
  case 'friday':
    console.log('friday is a working day')
    break;
  case 'Friday':
    console.log("Friday is a working day")
    break;
  default:
    console.log('It is not a week day.')
}

// Exercises: Level 3
// Write a program which tells the number of days in a month.
//   Enter a month: January
//   January has 31 days.
//   Enter a month: JANUARY
//   January has 31 day
//   Enter a month: February
//   February has 28 days.
//   Enter a month: FEbruary
//   February has 28 days.
// Write a program which tells the number of days in a month, now consider leap year.
let Month = prompt("enter month to check number of days");
switch (Month) {
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
        console.log(`${Month} has 31 days`)
        break;
    case "april":
    case "june":
    case "september":
    case "november":
        console.log(`${Month} has 30 days`)
        break;
    case "febuary":
        console.log(`${Month} has 29 days`)
        break;
    default:
        console.log("invalid month entered");
}