
function add() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;

    const result = document.getElementById("answer");

    const value1 = parseInt(num1);
    const value2 = parseInt(num2);
    
    let answer =  value1 + value2 ;
    return(result.textContent = "Your answer is " +answer);
       
}


function subtract() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;

    const result = document.getElementById("answer");

    const value1 = parseInt(num1);
    const value2 = parseInt(num2);
    
    let answer =  value1 - value2 ;
    return(result.textContent = "Your answer is " +answer);
       
}

function multiply() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;

    const result = document.getElementById("answer");

    const value1 = parseInt(num1);
    const value2 = parseInt(num2);
    
    let answer =  value1 * value2 ;
    return(result.textContent = "Your answer is " +answer);
       
}

function divide() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;

    const result = document.getElementById("answer");

    const value1 = parseInt(num1);
    const value2 = parseInt(num2);
    
    let answer =  value1 / value2 ;
    return(result.textContent = "Your answer is " +answer);
       
}


