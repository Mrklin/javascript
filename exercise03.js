
function vote() {
    const input = parseInt(document.getElementById("input").value);
    const age = document.getElementById("age");
    

    if (isNaN(input)) {
        age.textContent = "input a number";
    } else if(input < 18) {
        age.textContent = "you are not eligible to vote";
    } else{
        age.textContent = "You are eligible to vote";
    }
}