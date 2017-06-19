function searchFunction() {
  // Declare variables
  var input, filter, table, tr, td, i;
  input = document.getElementById("srch-term");
  filter = input.value.toUpperCase();
  table = document.getElementById("theTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }


  }



}


//add data to table that calculates tax

function calculateTax(price){
return price * 0.08 + price;
}


//first grab the rows
var table = document.getElementById("theTable");
var row0 = document.getElementById("row0");
var row1 = document.getElementById("row1");
var row2 = document.getElementById("row2");
var row3 = document.getElementById("row3");
var row4 = document.getElementById("row4");
var row5 = document.getElementById("row5");

//header row
var headerRow = row0.insertCell(3);
headerRow.innerHTML = "After Tax";

//first row
var tax1 = row1.insertCell(3);
var resultTax1 = calculateTax(5000);
tax1.innerHTML = resultTax1;


//second row
var tax2 = row2.insertCell(3);
var resultTax2 = calculateTax(2500);
tax2.innerHTML = resultTax2;

//third row
var tax3 = row3.insertCell(3);
var resultTax3 = calculateTax(3200);
tax3.innerHTML = resultTax3;

//fourth row
var tax4 = row4.insertCell(3);
var resultTax4 = calculateTax(4000);
tax4.innerHTML = resultTax4;

//fifth row
var tax5 = row5.insertCell(3);
var resultTax5 = calculateTax(3400);
tax5.innerHTML = resultTax5;
