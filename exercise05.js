

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






