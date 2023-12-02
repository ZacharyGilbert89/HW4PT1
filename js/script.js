// File: script.js
// GUI Assignment: HW3
// Zachary Gilbert, UMass Lowell Computer Science,
// Zachary_Gilbert@student.uml.edu
// Copyright (c) 2023 by Zachary Gilbert. All rights reserved. May be freely copied or
// excerpted for educational purposes with credit to the author.
// updated by ZG on December 1, 2023 at 11:30 AM
//global variables that hold the values for the table
let minCol = 0;
let minRow = 0;
let maxCol = 0;
let maxRow = 0;

//validators

$.validator.addMethod("greaterThan", function(value, element, param){ //makes sure that a min value doesnt exceed a max value
  return this.optional(element) || parseInt(value) >= parseInt($(param).val());
});

$.validator.addMethod("noDecimal", function(value, element){//makes sure that the value entered is a number
    return !(value % 1);
});

document.querySelector("form").addEventListener("submit", function (e) { //submit the form when submit button is pressed
  e.preventDefault();
  form.submit(); //submit form
});

$(document).ready(function() 
{
  //validations
  $("#form").validate({
    rules: {
      minCol: {
          required: false,
          noDecimal: true,
          range: [-50, 50]
      },
      maxCol: {
        required: false,
        range: [-50, 50],
        greaterThan: "#minCol"
      },
      minRow: {
        required: false,
        range: [-50, 50]
      },
      maxRow: {
        required: false,
        range: [-50, 50],
        greaterThan: "#minRow"
      }, 
    },
    //Validation messages if the user creates an error
    messages: {
      minCol: {
          required: "Please Enter a Minimum Column",
          integer: "Please Enter an Integer",
          range: "Please Stay Between the Ranges of (-50 to 50)"
      },
      maxCol: {
        required: "Please Enter a Maximum Column",
        integer: "Please Enter an Integer",
        range: "Please Stay Between the Ranges of (-50 to 50)",
        greaterThan: "Cannot have a minimum exceeding a maximum"
      },
      minRow: {
        required: "Please Enter a Minimum Row",
        integer: "Please Enter an Integer",
        range: "Please Stay Between the Ranges of (-50 to 50)"
      },
      maxRow: {
        required: "Please Enter a Maximum Row",
        integer: "Please Enter an Integer",
        range: "Please Stay Between the Ranges of (-50 to 50)",
        greaterThan: "Cannot have a minimum exceeding a maximum"
      }
    }, 
    submitHandler: function(form) 
    {
      //Creates the TABLE
      const table = document.createElement("table");
      const tabledata = document.getElementById("table");
      tabledata.innerHTML = ""; //clears previous table if there was one
      //gets values
      minCol = document.getElementById("minCol").value;
      maxCol = document.getElementById("maxCol").value;
      minRow = document.getElementById("minRow").value;
      maxRow = document.getElementById("maxRow").value;
      minRow -= 1; //offset
      minCol -= 1; //offset
      //fills table
      minRow -= 1;//used this to offset so we can have a top row that shows each value
      minCol -= 1;//used this to offset so we can have a left column that shows each column value
      for (let i = minRow; i <= maxRow; i++) {
        row = document.createElement("tr");//creates a row
        for (let j = minCol; j <= maxCol; j++) {//fills the row based on i*j
            colH = document.createElement("th");
            if(i == minRow) {//if its the first row
              if(i == minRow && j == minCol){//if its the first cell in the table(top right cell), we do not want to do i*j, we instead want to fill it with nothing
                colH.innerText = " ";
                row.appendChild(colH);
              } else { //since its the first row, we just want to store the j values
                colH.innerText = j;
                row.appendChild(colH);
              }
            } else if(j == minCol) {//if its the first column, we only want to fill it with i values
              colH.innerText = i;
              row.appendChild(colH);
            }else {//else it fills each cell with their respective products
              colH.innerText = j * i;
              row.appendChild(colH);
            }
        }
        table.appendChild(row);//appends all the row data
      }
      tabledata.appendChild(table);//sets the table with the table data
      //--------------------------------------------
    }
  });
});

