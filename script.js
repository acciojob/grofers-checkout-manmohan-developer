// const { createContext } = require("react");

const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
let price = document.querySelectorAll(".price");

let total = 0;
//checking for price 
// console.log(price[0].textContent)

//looping through all list elements.
for(let i =0; i<price.length; i++){

  //converting content(string to number ) and add in total.
   total = total+(+price[i].textContent);
}

//trying to remove old Row
 let oldrow = document.getElementById("finalRow");
 if(oldrow) oldrow.remove();

  //trying to create a new list item.
  //create row
  let finalRow = document.createElement("tr");
  finalRow.id = "finalRow"
  //create dt
  let tdItem = document.createElement("td")
   tdItem.innerText = "Total";

  let tdTotal = document.createElement("td");
   tdTotal.innerText = total;

  finalRow.appendChild(tdItem);
  finalRow.appendChild(tdTotal);
  
  document.getElementById("myTable").appendChild(finalRow);
};

getSumBtn.addEventListener("click", getSum);


