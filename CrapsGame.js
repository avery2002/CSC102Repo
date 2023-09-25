//This function will be called by a button click
//It will start our game
function playCraps() {
    console.log("playCraps function called");

    //First roll of the dice
    var die1 = rollDie();
    console.log("The first die roll is: " + die1);

    //Second roll of the dice
    var die2 = rollDie();
    console.log("The second die roll is: " + die2);

    //add the rolls together
    var sum = die1 + die2;
    console.log("The sum of the dice rolls is: " + sum);

    //Show the result of the first die roll on the HTML page
    outputRes("die1Res", "Die 1 is: " + die1);

    //Show the result of the second die roll on the HTML page
    outputRes("die2Res", "Die 2 is: " + die2);

    //Show the sum of the dice roll on the HTML page
    outputRes("sumRes", "The sum is: " + sum);

    //the logic for if we won, lost, or tied
    if (sum == 7 || sum == 11) {
        //you lose
        outputRes("crapsRes", "You lose!");
    }
    //if the diece equal each other and they are even
    else if (die1 == die2 && die2 % 2 == 0) {
        //You win
        outputRes("crapsRes", "You win!");
    }
    //The catch all the diece roll was a tie
    else {
        outputRes("crapsRes", "You pushed!");
    }
};


//This function will output our game results
function outputRes(htmlElement, theText){
    //Use the html element to show the results
    document.getElementById(htmlElement).innerHTML = theText;
};


//This function will generate a random number between 1 and 6
function rollDie(){
    //get a random number btween 0 and 1, multiply by 6
    var die = 6 * Math.random();
    //Return the die roll and make sure it is a whole number
    return Math.ceil(die);
};