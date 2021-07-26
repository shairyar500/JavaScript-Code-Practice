//Introduction to Iterators .....................................................................................
const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
  return number + number;
});

console.log(squareNumbers);

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'string';
});

console.log(onlyNumbers);

//The .forEach() Method ............................................................................................
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(fruitsItem => console.log('I want to eat a ' + fruitsItem));
fruits.forEach(allFruits => console.log('I want to eat a ' + allFruits))
fruits.forEach(reasonableFritsForSale => console.log('I want to eat a ' + reasonableFritsForSale))
fruits.forEach(fruitsForSale => console.log('I want to eat a' + fruitsForSale))

fruits.forEach(everyFruits => console.log('I want to eat a' + everyFruits)) 

//The .map() Method ...............................................................................................
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animal =>{
  return animal[0];
})

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(number =>{
  return number / 100;
});

console.log(smallNumbers);

let cities = ['karachi','islamabad','lahore','sialkot'];

let firstCity = cities.forEach(bigCitites => {
    console.log(cities[0]);
});

let countries = ['Pakistan', 'USA', 'Turkey', 'China', 'Japan', 'Russia', 'Austratlia']

let allCountries = countries.map(newCountry =>{
    return newCountry;
})
console.log(allCountries);

//The .filter() Method........................................................................................
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smaallNumbers = randomNumbers.filter(numeric =>{
  return numeric < 250;
})

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(fWords => {
  return fWords.length > 7;
})

//The .findIndex() Method ........................................................................................
const animalss = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
const foundAnimal = animalss.findIndex(animal =>{
  return animal === 'elephant';
})
const startsWithS = animals.findIndex(animal =>{
/*   return animal[0] === 's';*/ console.log(animalss[0] === 'hippo');
})
//The .reduce() Method .........................................................
const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator, currentValue) =>{
console.log('The value of accumulator: ', accumulator);
console.log('The value of currentValue: ', currentValue);
return accumulator + currentValue;
console.log(newSum);
},10)  

//Iterator Documentation .....................................................................................

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some((word) => {
  return word.length < 6;
}));

// Use filter to create a new array
const interestingWords = words.filter((newWord) =>{
  return newWord.length > 5;
})


// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(interestingWords.every((word) => { 
  return word.length > 5;
} ));

//Choose the Right Iterator .......................................................................................
const citiees = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
citiees.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = citiees.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = citiees.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.every(num => num < 0);