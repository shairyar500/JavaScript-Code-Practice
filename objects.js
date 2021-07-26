//Creating Object Literals...................................................................................
// Write your fasterShip object literal below
let fasterShip = {
    Fuel_Type: 'Turbo Fuel',
    color: 'silver'
};
console.log(fasterShip);

//Accessing Properties..........................................................................................
let spaceship = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn']
  };
  
  // Write your code below dot notation 
  let crewCount = spaceship.numCrew
  let planetArray = spaceship.flightPath
  console.log(crewCount);
  console.log(planetArray);

  let specialPlanet = spaceship.homePlanet
  console.log(specialPlanet);

  let newColor = spaceship.color
  console.log(newColor);

//Bracket Notation .............................................................................................
  let spaceshiip = {
    'Fuel Type' : 'Turbo Fuel',
    'Active Mission' : true,
    homePlanet : 'Earth', 
    numCrew: 5
   };
  
  let propName =  'Active Mission';
  
  // Write your code below
  let isActive = spaceshiip['Active Mission']
    
  console.log(spaceshiip[propName]);

//Property Assignment...............................................................................................
let spaaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
  };
  
  // Write your code below
  spaaceship.color = 'glorious gold';
  spaaceship.numEngines = 5;
  delete spaaceship['Secret Mission'];
  console.log(spaaceship);

//Methods...........................................................................................................
  let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

  // Write your code below
let alienShip = {
    retreat(){
    console.log(retreatMessage);
  },
    timeSet() {
      console.log('Spim... Borp... Glix... Blastoff!');
    },
    duration(){
        console.log(57);
    }
}
alienShip.retreat();
alienShip.timeSet();
alienShip.duration();
// console.log(alienShip);

//Nested Objects ......................................................................................................
let spacceship = {
  passengers: [{name:'all passengers'}],
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
  },
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    'back-up': {
      battery: "Lithium",
      terabytes: 50
    }
  }
}; 

let capFave = spacceship.crew.captain['favorite foods'][0];
let firstPassenger = spacceship.passengers[0]

//Pass By Reference .........................................................................................................
let sspaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// Write your code below
let greenEnergy= obj => {
  obj['Fuel Type'] = 'avocado oil';
}

let remotelyDisable = object => {
  object.disabled = true;
}

greenEnergy(sspaceship);
remotelyDisable(sspaceship);
console.log(sspaceship);

//Looping Through Objects ...................................................................................................
// let spaceshiip = {
//   crew: {
//   captain: { 
//       name: 'Lily', 
//       degree: 'Computer Engineering', 
//       cheerTeam() { console.log('You got this!') } 
//       },
//   'chief officer': { 
//       name: 'Dan', 
//       degree: 'Aerospace Engineering', 
//       agree() { console.log('I agree, captain!') } 
//       },
//   medic: { 
//       name: 'Clementine', 
//       degree: 'Physics', 
//       announce() { console.log(`Jets on!`) } },
//   translator: {
//       name: 'Shauna', 
//       degree: 'Conservation Science', 
//       powerFuel() { console.log('The tank is full!') } 
//       }
//   }
// }; 

// // Write your code below
// for (let crewMember in spaceshiip.crew){
// console.log(`${crewMember}: ${spaceshiip.crew[crewMember].name}`)
// };
// for(let crewMember in spaceshiip.crew){
//  console.log(`${spaceshiip.crew[crewMember].name}: ${spaceshiip.crew[crewMember].degree}`)
// };
