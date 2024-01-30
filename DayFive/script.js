// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
//   ]
  
//   const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'

//   Declare an empty array;
      const array = [];

//   Declare an array with more than 5 number of elements
const countries= ["Nigeria", "Ghana", "Morocco", "Finland", "Kenya"];

//   Find the length of your array
console.log(countries.length);

//   Get the first item, the middle item and the last item of the array
let firstItem = countries[0]
console.log(firstItem);
let middArr =  countries[Math.round((countries.length - 1) / 2)];
console.log(midItem);
let lastArr = countries.length -1;
console.log(countries[lastItem]);


//   Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes =[1, 2, "Nigeria", "Togo", true, false, [1,2,"three",false]];

//   Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle" ,"Amazon"];

//   Print the array using console.log()
console.log(itCompanies);

//   Print the number of companies in the array
console.log(itCompanies.length);

//   Print the first company, middle and last company
console.log(itCompanies[0]);
let middleCompany =  itCompanies[Math.round((itCompanies.length - 1) / 2)];
console.log(middleCompany) 
let lastCompany = family.length -1;
console.log(itCompanies[lastCompany]);

//   Print out each company
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);

//   Change each company name to uppercase one by one and print them out
let index1 = itCompanies[0].toUpperCase();
let index2 = itCompanies[1].toUpperCase();
let index3 = itCompanies[2].toUpperCase();
let index4 = itCompanies[3].toUpperCase();
let index5 = itCompanies[4].toUpperCase();
let index6 = itCompanies[5].toUpperCase();
console.log(index1,index2,index3,index4,index5,index6);


//   Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.join(","));

//   Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let indexx = itCompanies.indexOf('Google')
 if(indexx === -1){
    console.log("company not exist");
 }else{
  console.log("company does exist");
 }

//   Filter out companies which have more than one 'o' without the filter method

//   Sort the array using sort() method
console.log(itCompanies.sort());

//   Reverse the array using reverse() method
 console.log(itCompanies.reverse());

//   Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3));

//   Slice out the last 3 companies from the array
 console.log(itCompanies.slice(4,7));

//   Slice out the middle IT company or companies from the array
let middCompany =  itCompanies[Math.round((itCompanies.length - 1) / 2)];
 console.log(middCompany);

//   Remove the first IT company from the array
console.log(itCompanies.shift());

//   Remove the middle IT company or companies from the array
console.log(itCompanies.splice(middCompany));

//   Remove the last IT company from the array
console.log(itCompanies.pop());

//   Remove all IT companies
console.log(itCompanies.splice());

//   Exercise: Level 2
//   First remove all the punctuations and change the string to array and count the number of words in the array
//   let text =
//   'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
//   console.log(words)
//   console.log(words.length)
//   ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let regex =/,./g
let word = text.replace(regex, " ")
let wordLenght = word.split(" ");
console.log(word.match());
console.log(word.split(" " ,));
console.log(wordLenght.length);


//   In the following shopping cart add, remove, edit items
//   const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//   add 'Meat' in the beginning of your shopping cart if it has not been already added
//   add Sugar at the end of you shopping cart if it has not been already added
//   remove 'Honey' if you are allergic to honey
//   modify Tea to 'Green Tea'
//meat
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift("Meat")
console.log(shoppingCart);
//sugar
shoppingCart.push("sugar")
console.log(shoppingCart);
//honey
shoppingCart.splice(shoppingCart.indexOf("Honey"))
console.log(shoppingCart);
//modify Tea to 'Green Tea'
shoppingCart.splice(shoppingCart.indexOf("Tea"), 1, "Green Tea")
console.log(shoppingCart);

//   In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
  
//   Concatenate the following two variables and store it in a fullStack variable.
  
//   const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
//   const backEnd = ['Node','Express', 'MongoDB']
//   console.log(fullStack)
//   ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
let fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

//   Exercise: Level 3
//   The following is an array of 10 students ages:
//   const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//   Sort the array and find the min and max age
//   Find the median age(one middle item or two middle items divided by two)
//   Find the average age(all items divided by number of items)
//   Find the range of the ages(max minus min)
//   Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort();
console.log(ages);
// let minAge = Math.min(...ages);
// let yongest = ages.filter(item => item == min)
// console.log(yongest);
let max = Math.max(...ages);
let oldest = ages.filter(item => item == max)
console.log(oldest);



//   Find the middle country(ies) in the countries array
  //   Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
  
