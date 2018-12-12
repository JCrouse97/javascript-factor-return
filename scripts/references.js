//*** Reference code ***

"use strict";

let total = 1;

function allFactors(n, returnHighest){
  let factor = n - 1;
  let str = n + ", ";
  while(factor !==0){

    if(n % factor === 0){
      if(total === 1 && returnHighest){
        return factor;
      }
      str += `${factor}, `;
      total++;
    }
    factor--;
  }
  return str;
}

function Calculate(){
  let msg = "";
  let num = document.getElementById('userInput').value;
  let wantHighest = document.getElementById('onlyHighest').checked;
  let result = allFactors(num, wantHighest);
  if(typeof result === "string"){
    msg = `There are ${total} factors of ${num} and they are ${result}`;
  }else{
    msg = `The Highest factor of ${num} is ${result}`;
  }

  document.getElementById('jsOutlet').innerHTML = msg;
  total = 1;
}

function reset(){
  document.getElementById('jsOutlet').innerHTML = "";
  document.getElementById('userInput').value = "";
  total = 1;

}
