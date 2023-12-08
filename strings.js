    function validateInputs() {
        // Get values from input fields in the webpage
        var fname = document.getElementById("fname").value;
        var lname = document.getElementById("lname").value;
        var zip = document.getElementById("zip").value;

        // Combine first name and last name into one variable
        var fullName = fname + " " + lname;

        // Check if the combined name has more than 20 characters
        if (fullName.length > 20) {
            // Display alert if too large
            alert("name too large");
            // Stop execution if invalid
            return;
        }

        // Check if the zip code contains exactly 5 digits
        if (!/^\d{5}$/.test(zip)) {
            // Display alert if incorrect number of digits
            alert("Invalid zip. Zip should be 5 digits.");
            // Stop execution if invalid
            return; 
        }

        // If iall inputs are coorect, display the secret message
        alert("You found the secret message, " + fullName + "!");
    }






