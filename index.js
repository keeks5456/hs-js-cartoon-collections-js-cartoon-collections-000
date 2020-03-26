
function dwarfRollCall(dwarves) {
  let helper = []
for(let i = 0; i < dwarves.length; i++){
//push() at every index of dwarves add up by one  
  helper.push(`${i+1}. ${dwarves[i]} `)
}
//dont forget join() puts the array back together into a full line string
return helper.join("")
  }

//use .upperCase()
  //concat exclamation points at end
function summonCaptainPlanet(planeteerCalls){
  let i = 0;
  let calls = []
  while (i < planeteerCalls.length){
    calls.push(planeteerCalls[i].toUpperCase() + "!")
    i++;
  }
  return calls;
}

function longPlaneteerCalls(words) {
if(words.length > 4){
  return true
}
return false
}

function findTheCheese(foods) {
let cheese = ["cheddar", "gouda", "camembert"]
for(let i = 0; i < foods.length; i++){
  if(foods[i] === "cheddar" || foods[i] === "gouda" || foods[i] === "camembert"){
    return foods[i];
  }
}
return "no cheese!"
  }
// since we know whats in the array, we want to compare each cheese to the foods index
 
 
 function wordsWithB(name){
   let newName = [];
   for(let i = 0; i < name.length; i++){
   if(name[i].slice(0,1) === "b"){
     newName.push(name[i]);
   }
   }
   return newName;
 }
 
 function bNames(name){
   for(let i = 0; i < names.length; i++){
     if(name[i] === "b" || name[i] === "B"){
       return names[i];
     }
     }
   }
 
 
 