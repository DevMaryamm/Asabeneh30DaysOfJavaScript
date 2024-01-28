//Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challange = '30 Days Of Javascript';

//Print the string on the browser console using console.log()
console.log(challange);

//Print the length of the string on the browser console using console.log()
console.log(challange.length);

//Change all the string characters to capital letters using toUpperCase() method
console.log(challange.toUpperCase());

//Change all the string characters to lowercase letters using toLowerCase() method
console.log(challange.toLowerCase());

//Cut (slice) out the first word of the string using substr() or substring() method
console.log(challange.substr(0, 1));

//Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challange.slice(3));

//Check if the string contains a word Script using includes() method
console.log(challange.includes('script'));

//Split the string into an array using split() method
console.log(challange.split());

//Split the string 30 Days Of JavaScript at the space using split() method
console.log(challange.split(""));

//'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon."
console.log(companies.split(","));

//Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challange.replace("Javascript", "python"));


//What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challange.charAt(15));

//What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challange.charCodeAt("J"));

//Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challange.indexOf("a"));


//Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challange.lastIndexOf ('a'));

//Use indexOf to find the position of the first occurrence of the word because in the following sentence: 'You cannot end a
//sentence with because because because is a conjunction'
let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'));

//Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let secondSentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(secondSentence.lastIndexOf("because"));

//Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let anotherSentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(anotherSentence.search('because'));

//Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
let newChallange = ' 30 Days Of JavaScript '
console.log(newChallange.trim());

//Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challange.startsWith(30));

//Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challange.endsWith("script"));

//Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(challange.match(/a/g));

//Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'

let stringOne = '30 days of';
let stringTwo = ' javaScript';
console.log(stringOne.concat(stringTwo));

//Use repeat() method to print 30 Days Of JavaScript 2 times
let print = ' 30 Days of JavaScript ';
console.log(print.repeat(2));


//Level 2:

//Using console.log() print out the following statement:
console.log(("The quote 'there is no exercise better for the heart than racing and lifting people up.' by John Holmes teaches us to help one another."));

//Using console.log() print out the following quote by Mother Teresa:
console.log("Love is not patronizing and charity isn't about pity, it is about love. charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");

//Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let number1 = typeof('10');
if (number1 === 10) {
    console.log('yes');
} else if (number1 !==10) {
    number1 = 10
    console.log(number1);
}

//Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let numberOne = parseFloat('9.8');
if (numberOne === 10) {
    console.log('yes');
} else if (numberOne !==10) {
    numberOne = 10
    console.log(numberOne);
}

//Check if 'on' is found in both python and jargon
let firstWord = "python";
let secondWord = "jargon";
console.log(firstWord.includes('on'));
console.log(secondWord.includes('on'));

//I hope this course is not full of jargon. Check if jargon is in the sentence.
let thirdWord = 'I hope this course is not full of jargon'
console.log(thirdWord.includes('jargon'));

//Generate a random number between 0 and 100 inclusively.
let randomNum1 = Math.floor(Math.random() * 101);
console.log(randomNum1);

//Generate a random number between 50 and 100 inclusively.
let randomNum2 = Math.floor(Math.random() * 51) + 50
console.log(randomNum2);

//Generate a random number between 0 and 255 inclusively.
let randomNum3 = Math.floor(Math.random() * 256);
console.log(randomNum3);

//Access the 'JavaScript' string characters using a random number.
let string = "Javascript"
let strRandomNum = Math.floor(Math.random() *string.length);

//Use console.log() and escape characters to print the following pattern.

// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125
console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125');


//Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentenceBecause = "You cannot end a sentence with because because because is a conjunction"
let extractedSentenceBecause = sentenceBecause.substr(sentenceBecause.indexOf('because'), 23);
console.log(extractedSentenceBecause);

//Exercises: Level 3

//'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let loveSentence = "Love is the best thing in this world. Some found their love and some are still looking for their love.";
let numOfLove = (loveSentence.match(/love/g)).length;
console.log(numOfLove);

//Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

//Clean the following text and find the most frequent word (hint, use replace and regular expressions).

//const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
//Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
