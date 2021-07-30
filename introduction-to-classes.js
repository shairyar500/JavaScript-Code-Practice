// introduction-to-classes ......................................................................
class Dog {
    constructor(name) {
      this._name = name;
      this._behavior = 0;
    }
  
    get name() {
      return this._name;
    }
    get behavior() {
      return this._behavior;
    }   
  
    incrementBehavior() {
      this._behavior ++;
    }
  }
  const halley = new Dog('Halley');
  console.log(halley.name); // Print name value to console
  console.log(halley.behavior); // Print behavior value to console
  halley.incrementBehavior(); // Add one to behavior
  console.log(halley.name); // Print name value to console
  console.log(halley.behavior); // Print behavior value to console

// Constructor ........................................................................................
class Suurgeon{
    constructor(name, department){
      this.name = name;
      this.department = department;
    }
  }

//Instance ..............................................................................................
class Surgeon {
    constructor(name, department) {
      this.name = name;
      this.department = department;
    }
  }
  
  const surgeonRomero = new Surgeon
    ('Francisco Romero','Cardiovascular');
  const surgeonJackson = new Surgeon(
    'Ruth Jackson','Orthopedics'
  );
  console.log(surgeonRomero.department);

//Methods ....................................................................................................
class Surggeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
    }
    get name() {
      return this._name;
    }
    get department() {
      return this._department;
    }
    get remainingVacationDays(){
      return this._remainingVacationDays;
    }
    takeVacationDays(daysOff){
      this._remainingVacationDays -= daysOff;  
    }
}

const surgeonRoomero = new Surggeon('Francisco Romero', 'Cardiovascular');
const surgeonJaackson = new Surggeon('Ruth Jackson', 'Orthopedics');

//Method Calls ..................................................................................

class Surgeonn {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get department() {
    return this._department;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

const surgeonRommero = new Surgeonn('Francisco Romero', 'Cardiovascular');
const surgeonJacksonm = new Surgeonn('Ruth Jackson', 'Orthopedics');

console.log(surgeonRommero.name);
surgeonRommero.takeVacationDays(3);
console.log(surgeonRommero.remainingVacationDays);

//Inheritance II ......................................................................................

class HospitalEmployee {
  constructor(name){
    this._name = name;
    this._remainingVacationDays = 20;
  }
  get name(){
    return this._name
  }
  get remainingVacationDays(){
    return this._remainingVacationDays;
  }
  takeVacationDays(daysOff){
    this._remainingVacationDays -= daysOff;
  }
}

//Inheritance III .......................................................................................
class HospitalEmployeee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Nurse extends HospitalEmployeee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);

//Inheritance IV .........................................................................................
class HospitaalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Nurrse extends HospitaalEmployee {
 constructor(name, certifications) {
   super(name);
   this._certifications = certifications;
 } 
}

const nnurseOlynyk = new Nurrse('Olynyk', ['Trauma','Pediatrics']);
nnurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);

//Inheritance V ..........................................................................................
class HosspitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Nursee extends HosspitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  } 
  get certifications(){
    return this._certifications;
    }
    addCertification(newCertification){
      this._certifications.push(newCertification);
  }
}

const nurse1Olynyk = new Nursee('Olynyk', ['Trauma','Pediatrics']);
nurse1Olynyk.takeVacationDays(5);
console.log(nurse1Olynyk.remainingVacationDays);
nurse1Olynyk.addCertification('Genetics');
console.log(...nurse1Olynyk.certifications);

//Static Methods ..................................................................................
class hospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
    
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
static generatePassword(){
  return Math.floor(Math.random() * 10000)
}

}

class nurse extends hospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  } 
  
  get certifications() {
    return this._certifications;
  }
  
  addCertification(newCertification) {
    this.certifications.push(newCertification);
  }
}

const nurseOlynykk = new nurse('Olynyk', ['Trauma','Pediatrics']);
nurseOlynykk.takeVacationDays(5);
console.log(nurseOlynykk.remainingVacationDays);
nurseOlynykk.addCertification('Genetics');
console.log(...nurseOlynykk.certifications);
