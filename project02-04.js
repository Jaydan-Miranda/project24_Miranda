/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Jaydan Miranda
      Date:   03/27/2025

      Filename: project02-04.js
 */
      // initialize values for prices
      const CHICKEN_PRICE = 10.95;
      const HALIBUT_PRICE = 13.95;
      const BURGER_PRICE = 9.95;
      const SALMON_PRICE = 18.95;
      const SALAD_PRICE = 7.95;
      const SALES_TAX = 0.07;
      
      function calcTotal() {
          let cost = 0;  //initialize cost to 0
      

          // Checks if element is true by whether or not check box is checked
          const buyChicken = document.getElementById("chicken").checked;
          const buyHalibut = document.getElementById("halibut").checked;
          const buyBurger = document.getElementById("burger").checked;
          const buySalmon = document.getElementById("salmon").checked;
          const buySalad = document.getElementById("salad").checked;
      
          // Add the price of each selected item to the total cost using the ternary operator if the checkbox is checked and the ? operator checks if the value is true or not (checked box = true)
          cost += buyChicken ? CHICKEN_PRICE : 0;
          cost += buyHalibut ? HALIBUT_PRICE : 0;
          cost += buyBurger ? BURGER_PRICE : 0;
          cost += buySalmon ? SALMON_PRICE : 0;
          cost += buySalad ? SALAD_PRICE : 0;
      
          // Display the total cost formatted as currency
          document.getElementById("foodTotal").innerHTML = formatCurrency(cost);
      
          // Calculate sales tax (7% of the cost)
          let tax = cost * SALES_TAX;
          document.getElementById("foodTax").innerHTML = formatCurrency(tax);
      
          // Calculate the final total (cost + tax)
          let totalCost = cost + tax;
          document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);
      }
      
      // Function to format currency values (e.g., convert 10.95 to "$10.95")
      function formatCurrency(value) {
          return "$" + value.toFixed(2);
      }
      
      // Waits for a click to run the calc total command using the checked boxes
      document.getElementById("chicken").addEventListener("click", calcTotal);
      document.getElementById("halibut").addEventListener("click", calcTotal);
      document.getElementById("burger").addEventListener("click", calcTotal);
      document.getElementById("salmon").addEventListener("click", calcTotal);
      document.getElementById("salad").addEventListener("click", calcTotal);
      