// my age in 2024
var myAge = 37;

// first 2 years of a dogs life are 10.5 each
var earlyYears = 2;
earlyYears *= 10.5

// later year is equal to my age minus the first two years
var laterYears = myAge - 2;

// dog years after first two human years is multiplied by 4
laterYears *= 4;

// my age in dog years after acounting for the first two years and the later years
var myAgeInDogYears = earlyYears + laterYears;

// my name in lower case as a variable 
var myName = 'Anthony'.toLowerCase();


console.log (`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
