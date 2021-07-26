//Repeating Tasks Manually.............................................................................
vacationSpotss = ['Islamabad', 'New York City', 'Istanbul'];
console.log(vacationSpotss[0]);
console.log(vacationSpotss[1]);
console.log(vacationSpotss[2]);

//The For Loop ..........................................................................................
for (let counter = 5; counter <= 10; counter++){
    console.log(counter);
  }

//Looping in Reverse.....................................................................................
for (let counter = 3; counter >= 0; counter--){
    console.log(counter);
  }

//Looping through Arrays ................................................................................
const vacationSpots = ['Bali', 'Paris', 'Tulum'];

for (let i = 0; i < vacationSpots.length; i++){
  console.log('I would love to visit ' + vacationSpots[i]);
}

let variable = [1,2,3,4,5]
for(i = 0; i < variable.length; i++){
    console.log('we are doing' + ' ' + variable[i]);
}
//Nested Loops ..............................................................................................
let bobsFollowers = ['shairyar','ali','tuba','abida'];
let tinasFollowers = ['shairyar','abida','sher'];
let mutualFollowers = [];
for (let i = 0; i < bobsFollowers.length; i++){
  for (let j = 0; j < tinasFollowers.length; j++){
    if(bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
      console.log(mutualFollowers);
    }
  }
};

// example 2
let shairyarFriends = ['Alishah','Shahzaib','Ali', 'khan'];
let alishahFriends = ['Alishah','Shahzaib','Ali','kiran'];
let mutualFriends = [];
for (let i = 0; i < shairyarFriends.length; i++){
    for(let j =0; j < alishahFriends.length; j++){
        if(shairyarFriends[i] === alishahFriends[j]){
            mutualFriends.push(shairyarFriends[i])
            console.log(mutualFriends);
        }
    }
}

//The While Loop ....................................................................................................
// A for loop that prints 1, 2, and 3
for (let counterOne = 1; counterOne < 4; counterOne++){
    console.log(counterOne);
  }
   
  // A while loop that prints 1, 2, and 3
  let counterTwo = 1;
  while (counterTwo < 4) {
    console.log(counterTwo);
    counterTwo++;
  }

//example 2
const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard;

while (currentCard != 'spade'){
  currentCard = cards[Math.floor(Math.random() * 4)];{
    console.log(currentCard);
  }
}

//Do...While Statements.......................................................................................................
let cupsOfSugarNeeded = 3;
let cupsAdded = 0;

do {
 cupsAdded++
 console.log(cupsAdded + ' cup was added') 
} while (cupsAdded < cupsOfSugarNeeded);

//The break Keyword .........................................................................................................
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below
for (let i = 0; i < rapperArray.length; i++){
  console.log(rapperArray[i]);
  if (rapperArray[i] === 'Notorious B.I.G.'){
    break;
  }
}

console.log("And if you don't know, now you know.");