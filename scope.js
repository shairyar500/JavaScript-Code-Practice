// Blocks and Scope ..........................................................................
const city = 'Karachi'

function logCitySkyline(){
    let skyscraper = 'Tomb of Quaid';
    return 'Amazing veiw outside of ' + skyscraper + ' in ' + city;
    // return 'The stars over the ' + skyscraper + ' in ' + city;
}
console.log(logCitySkyline());

//Global Scope.................................................................................

let satellite = "The Moon";
let galaxy = 'The Milky Way';
let stars = 'North Star';

function callMyNightSky(){
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy; 
}
console.log(callMyNightSky());

// Block Scope ................................................................................

function logVisibleLightWaves(){
    const lightWaves = 'Moonlight';
    console.log(lightWaves);
  }
  logVisibleLightWaves();
//   console.log(lightWaves); it shows refference error because it is a block scope within curly braces{}.

//Scope Pollution ............................................................................
const satellitee = 'The Moon';
const galaxxy = 'The Milky Way';
let staars = 'North Star';

const callMyNightSkyy = () => {
  staars = 'Sirius';
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSkyy());
console.log(staars);

// Practice Good Scoping .....................................................................
const logVisibleLightWavess = () => {
    let lightWaves = 'Moonlight';
      let region = 'The Arctic';
    // Add if statement here:
    if(region === 'The Arctic'){
      let lightWaves = 'Northern Lights';
      console.log(lightWaves);
    }
    console.log(lightWaves);
  };
  
  logVisibleLightWavess();