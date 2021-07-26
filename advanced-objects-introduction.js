//The this Keyword ..............................................................................................................
const robot = {
    model: '1E78V2',
    energyLevel: 100,
    city: 'karachi',
    provideInfo() { 
      return `I am ${this.model} and my current energy level is ${this.energyLevel} manufactured in ${city}.`
    },
};
  console.log(robot.provideInfo());

//Arrow Functions and this ......................................................................................................
const roboot = {
    energyLevel: 100,
    checkEnergy(){
      console.log(`Energy is currently at ${this.energyLevel}%.`)
    }
  }
  
  roboot.checkEnergy();

//Privacy ........................................................................................................................
const rrobot = {
    _energyLevel: 100,
    recharge(){
      this._energyLevel += 30;
      console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
    }
  };
  rrobot._energyLevel = "high";
  rrobot.recharge();

//Getters ........................................................................................................................
const rooboot = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel(){
    if(typeof this._energyLevel === 'number'){
      return 'My current energy level is ' + this._energyLevel
    }else {
      return "System malfunction: cannot retrieve energy level"
    }
  }
};
console.log(rooboot.energyLevel);

//Setters ................................................................
const robott = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors(num){
    if(typeof num === 'number' && num >= 0){
      this._numOfSensors = num
    }else{
      console.log('Pass in a number that is greater than or equal to 0');
    }
  }
};
robott.numOfSensors = 100;
console.log(robott.numOfSensors);

//Factory Functions ..................................................................
const robotFactory = (model, mobile) =>{
  return {
    model: model,
    mobile: mobile,
    beep(){
      console.log('beep boop');
    }
  };
};
const tinCan = robotFactory('P-500', true);
tinCan.beep();

//Property Value Shorthand ..................................................................
function robotFactoory(model, mobile){
  return {
    model, // removing values from key
    mobile, // removing values from key
    beep() {
      console.log('Beep Boop');
    }
  }
}

// To check that the property value shorthand technique worked:
const newRobot = robotFactoory('P-501', false)
console.log(newRobot.model)
console.log(newRobot.mobile)

// Destructured Assignment ..................................................................
const rrrobot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};
const {functionality} = rrrobot;
functionality.fireLaser();

//Built-in Object Methods ......................................................................
const robbott = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robbott);

console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robbott)

console.log(robotEntries);

// Declare newRobot below this line:
const neewRobot = Object.assign({
  laserBlaster: true,
  voiceRecognition: true}, robbott);

console.log(neewRobot);