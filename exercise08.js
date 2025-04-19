
function fizzBuzz() {
    const output = [];
    for (let i = 1; i <= 15; i++) {
 
        if (i % 3 === 0 && i % 5 == 0) {
            
            output.push("FizzBuzz");
            // console.log("FizzBuzz");
            
        } else if (i % 3 === 0 ){
           output.push("Fizz");
        //    console.log("Fizz");
        } else if(i % 5 === 0){

           output.push("Buzz");   
            
        } else {
            output.push(i);
        }    
         
    }
    return output;
}
 console.log(fizzBuzz());
  