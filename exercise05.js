
                            // Multiplication Table of numbers

let number = prompt("input a number:");

if ( number == null || number =="") {
    alert("please input a number");
    console.log("Please input a number");
    
} else {
    number = parseInt(number);

    if (isNaN(number)) {
        alert("Input a valid number");
        console.log("Input a valid number");
        
    } else {
    
        for (let i = 1; i <= 12; i++) {
            const answer = eval (number * i);
            console.log(number+" x "+ i +" = "+ answer);
        }
    }
}




























// function multiply() {
    
//     let num = document.getElementById("input");
//     const val = document.getElementById("value");
//     const head = document.getElementById("head");


//     if ( num == null || num =="") {
//         val.textContent = "Please input a number";
        
//     } else {

//         num = parseFloat(num);

//         if (isNaN(num)) {
//             val.textContent = "The value inputted is invalid";  

//         } else{
        

//         for (let i = 1; i <= 12; i++) {
//             const answer = eval (num * i);

//             console.log(num+" x "+ i +" = "+ answer);
//             head.textContent = `Multiplication of ${num} is :`;
//             val.textContent = `${num} x ${i} = ${answer}`;
//         }

//         }

         
//     }
// }
