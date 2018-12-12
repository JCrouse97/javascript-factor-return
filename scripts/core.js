//*** MASTER JAVASCRIPT FILE ***

"use strict";

let total = 1; //needed to count number of factors and when we found highest

function Calculate(){
  let msg = "";
  //needed to store origial msg var
  let num = document.getElementById('userInput').value;
  //grabs number from webpage
  let wantHighest = document.getElementById('onlyHighest').checked;
  //determines wether checkbox is checked
  let result = allFactors(num, wantHighest);
  //stores value and results of all factors
  if(typeof result === "string"){
  //checks to see if result is string or number and runs code accordingly
    msg = `There are ${total} factors of ${num} and they are ${result}`;
  }else{
    msg = `The Highest factor of ${num} is ${result}`;
  }

  document.getElementById('jsOutlet').innerHTML = msg;
  //js takes final message and puts in to P tag in HTML
  total = 1;
  //used to reset number of results after a calculating
}

function reset(){
  document.getElementById('jsOutlet').innerHTML = "";
  //clears results from calculation
  document.getElementById('userInput').value = "";
  //clears input field
  total = 1;
  //used to reset number of results after a calculation

}

//HELPER FUNCTION

//returns either all factors of given number or highest factor based on checkbox

function allFactors(n, returnHighest){
  let factor = n - 1;
  //creates number to divide into n
  let str = n + ", ";
  //adds original number into results
  while(factor !==0){
  //creates a cycle between n and 0

    if(n % factor === 0){
    //looks for highest number that can go in to n with no remainder
      if(total === 1 && returnHighest){
      //runs if Highest factor checkbox is checked
        return factor;
      }
      str += `${factor}, `;
      //adds new factor to string for every factor found
      total++;
      //counts up for every factor found to display total factors
    }
    factor--;
    //provides new number to be checked in next loop
  }
  return str;
  //returns list of all factors found
}
