// Avery Willets
// 12/8/23

// This function will test if the user input the correct answer.
function showResults() {
    // These get the user inputs and store them
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var numSum = document.getElementById("numSum").value;

    // This holds the true result of multiplying the two numbers
    var trueSum = num1 * num2;

    // This holds whether the user was correct or not
    var ifTrue = numSum == trueSum;

    // This if statement checks if the user was correct and displays a different message depending on that check
    // If the user was correct
    if (ifTrue) {
        // Alerts the user that their answer was correct
       alert("That's right! " + num1 + " * " + num2 + " = " + numSum);
    // If the user was incorrect
    } else {
        // Alerts the user that their answer was incorrect and informs them of the correct answer
       alert("That's incorrrect. " + num1 + " * " + num2 + " = " + trueSum);
    }
    
}


// My original plan was to have two images, one for correct answer and one for an incorrect answer.
// The goal was to have both hidden at the start, and the correct one would be revealed according to the result.
// However, I could never get the images to stay. It would flicker for a second then immediately disappear.
// And so, I abandoned the idea. Perhaps I'll revisit it at another date.

//Below is what I was trying to write.
/*document.getElementById("correctIcon").style.display = "block";
        document.getElementById("incorrectIcon").style.display = "none";

        setTimeout(function () {
            document.getElementById("correctIcon").style.display = "none";
        }, 5000);
        */

        /*
        document.getElementById("correctIcon").style.display = "none";
        document.getElementById("incorrectIcon").style.display = "block";
        */