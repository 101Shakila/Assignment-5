"use strict";

$(document).ready(() => {
    $("#calculate").click(() => {
        // get the number of cents from the user
        let cents = Math.floor(parseInt($("#cents").val()));

        // Here we will check if cents are betweent the restricted amount which is between 0 & 99
        if (isNaN(cents) || cents < 0 || cents > 99) {
            alert("Please enter a valid number between 0 and 99");
        } else {
            try {
                //Create a new instance of Coins Class!
                let coinC = new Coins();
                //We call the makeChange method with cents are the argument that's being passed
                coinC.makeChange(cents);
                // display the results of the calculations - based on # variables placed in html file we will display the data gathered from makeChange function

                $("#quarters").val(coinC.quarters);
                $("#dimes").val(coinC.dimes);
                $("#nickels").val(coinC.nickels);
                $("#pennies").val(coinC.pennies);

                $("#cents").focus();
            } catch (error) {
                alert(error.message);
            }
        }
    });


    // set focus on cents text box on initial load - so when user just opens up the page it focuses on the textbox for user to input cents

    $("#cents").focus();
});
