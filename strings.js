//This function takes in the user's inputs and returns message/alerts depending on their input
function getInput() {

 //This begins the loop
do{
    //This takes in the user's first and last name inputs and stores them in variables
    fName = prompt("First Name: ");
    lName = prompt("Last name: ");
    
    //This variable stores the user's combined first and last names
    fullName = fName + " " + lName;

    //This begins checking if the user's name is longer than 20 characters
    if(fullName.length > 20) {
        //This displays an alert if the user's name is longer than 20 characters
        alert("Name too large.");
    }
//This breaks the loop involving the fullName length
} while(fullName.length > 20)

    do {
        //This variable stores the zip code the user inputs
        zip = prompt("Zip Code: ");

        //This begins a loop that checks if the user's zip input is 5 digits
        if(zip.length != 5) {
            //This displays an alert if the user's zip input is not 5 digits
            alert("Please input a valid zip code.");
        }

    //This breaks the loop involving the zip code length
    } while(zip.length !=5) {
        //This displays the secret message once all the requirements have been passed
        alert("Hooray!");
    }


}