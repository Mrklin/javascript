

                            //Using alerts

    // (function name() {
    //     "use strict";

    //     let num = prompt("Enter a number:");

    //     if (num == "") {
    //          alert("Please enter a value");
    //     }
    //      let val = parseInt(num)
    //      if (isNaN(val)) {
    //         alert("That's not a number")
    //      } else if(val % 2 !==0) {
    //         alert(val + " is an odd number")
    //      } else{
    //         alert(val + " is an even number")
    //      }

    // })();
    
// console.log(num);






                    //On The Page

function check() {
    "use strict";

    const inputElement = document.getElementById("numberInput");
    const feedback = document.getElementById("feedback");

    const userInput = inputElement.value;
    

    if (userInput === "" || userInput === null) {
        feedback.textContent = "Please enter a number.";
    } 
    const number = parseInt(userInput);

         if (isNaN(number)){
            feedback.textContent = "That is not a number.";
        }

         else if(number % 2 !== 0) {
            feedback.textContent = number +" is an odd number";
        } else  {
            feedback.textContent = "Thank you. "+ number + " is an even number.";
        }

      document.getElementById("numberInput").value = "";
        
}
