let yourName = "Meghan Seger"
// We'll use these variables to track the counts of each cookie type.
let gb = 0      //Gingerbread
let cc = 0      //Chocolate Chip
let ss = 0      //Sugar Sprinkle
//Total Quantity.
var gbQuantity;
var ccQuantity;
var ssQuantity;
var total = 0;
var totalQuantity = document.getElementById("qty-total");
var gbQuantity = document.getElementById("qty-gb");
var ccQuantity = document.getElementById("qty-cc");
var ssQuantity = document.getElementById("qty-sugar");


//Updating display name

document.getElementById("credit").textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies.

document.getElementById("add-gb").addEventListener('click', function() {
    
    {
        gb++
    }
   
    gbQuantity.textContent = gb;
    
    total = total + 1;
    totalQuantity.textContent = total;
    console.log("Gingerbread + was clicked!")
})
// Event listener to decrease quantity on the "-" button for Gingerbread cookies.

document.getElementById("minus-gb").addEventListener("click", function() {
if(gb > 0)
    {
        gb-- 
    }
    
    gbQuantity.textContent = gb;

    total = total - 1;
    totalQuantity.textContent = total;
    
    console.log("Gingerbread - was clicked!")
})


// Event listener for clicks on the "+" button for Chocolate Chip cookies
document.getElementById("add-cc").addEventListener("click", function() {
    
    {
        cc++
    }
    
    ccQuantity.textContent = cc;
    
    total = total + 1;
    totalQuantity.textContent = total;
    
    console.log("Chocolate Chip + was clicked!")
})
// Event listener to decrease quantity on the "-" button for Chocolate Chip cookies.

document.getElementById("minus-cc").addEventListener("click", function() 
{
    if(cc > 0)
    {
        cc--
    }
    
    ccQuantity.textContent = cc;
    total = total - 1;
    totalQuantity.textContent = total;
    
    
   
    
    console.log("Chocolate Chip - was clicked!")
})
// Event listener for clicks on the "+" button for Sugar Sprinkle cookies
document.getElementById("add-sugar").addEventListener("click", function() {
    
    {
        ss++
    }
    
    ssQuantity.textContent = ss;
    totalQuantity = document.getElementById("qty-total");
    total = total + 1;
    totalQuantity.textContent = total;
    console.log("Sugar Sprinkle + was clicked!")
})
// Event listener to decrease quantity on the "-" button for Sugar Sprinkle cookies.
document.getElementById("minus-sugar").addEventListener("click", function() {
    if ( ss > 0)
    {
        ss--
    }    
    
    ssQuantity.textContent = ss;
    
    total = total - 1;
    
    totalQuantity.textContent = total;
    console.log("Sugar Sprinkle - was clicked!")
})