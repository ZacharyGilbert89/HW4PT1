let minCol = 0;
let minRow = 0;
let maxCol = 0;
let maxRow = 0;

$.validator.addMethod("greaterThan", function(value, element, param){
  return this.optional(element) || parseInt(value) >= parseInt($(param).val());
});
$.validator.addMethod("noDecimal", function(value, element){
return !(value % 1);
});document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Form Submitted");
  form.submit();
});
$(document).ready(function() 
{
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
      tabledata.innerHTML = "";

      minCol = document.getElementById("minCol").value;
      maxCol = document.getElementById("maxCol").value;
      minRow = document.getElementById("minRow").value;
      maxRow = document.getElementById("maxRow").value;
      minRow -= 1;
      minCol -= 1;

      for (let i = minRow; i <= maxRow; i++) {
        row = document.createElement("tr");
        for (let j = minCol; j <= maxCol; j++) {
            colH = document.createElement("th");
            if(i == minRow) {
              if(i == minRow && j == minCol){
                colH.innerText = " ";
                row.appendChild(colH);
              } else {
                colH.innerText = j;
                row.appendChild(colH);
              }
            } else if(j == minCol) {
              colH.innerText = i;
              row.appendChild(colH);
            }else {
              colH.innerText = j * i;
              row.appendChild(colH);
            }
        }
        table.appendChild(row);
      }
      tabledata.appendChild(table);
      //--------------------------------------------
    }
  });
});

