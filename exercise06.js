

let grade = prompt('enter a grade score');

if (grade == null || grade == "") {
    alert("Please input a grade score")
} else {
    grade = parseInt(grade);
    if (isNaN(grade)) {
        alert("Input a valid number")
    } else {
        if (grade < 50) {
            alert("Need improvement")
        } else if(grade > 50 && grade <=69 ) {
            alert("Good")
        } else {
            alert("Excellent Result")
        }
    }
}