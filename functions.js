// Functions .............................................................................
function sayThanks(name) {
    console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
  }
  sayThanks('Saeed Ahmad');


function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
    console.log(makeShoppingList);
}

//..................................................................................

function rectangleArea(width, height) {
    let area = width * height;
    return area;
  }
  console.log(rectangleArea(5, 7))

//Return..................................................................................

function totalStudents(batch20, batch21){
    return batch20 + batch21;
}
let numOfStudents = totalStudents(65, 35);
console.log(numOfStudents);

//Return..................................................................................

function occupyFood(fruits, vegetable){
    return fruits + vegetable
}
let allFood = occupyFood(8, 10);
console.log(allFood);

//Helper Functions..................................................................................

function monitorCount(rows, columns) {
    return rows * columns;
  }
  function costOfMonitors(rows, columns){
    return monitorCount(rows, columns) * 200;
  }
  const totalCost = costOfMonitors(5, 4);
  console.log(totalCost);

//Function Expressions..................................................................................
const plantNeedsWaters = function(day){
    if(day === 'Wednesday'){
      return true;
    }else{
      return false;
    }
  };
  
  plantNeedsWaters('Tuesday');
  console.log(plantNeedsWaters('Tuesday'));

//Arrow Functions //day => is arrow function no need to write function keyword ....................
  const plantNeedsWater = day => { 
    if (day === 'Wednesday') {
      return true;
    } else {
      return false;
    }
  };
//Concise Body Arrow Functions .......................................................................

const plantNeedsWateer = day => day === 'Wednesday' ? true : false;