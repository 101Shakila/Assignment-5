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

                //Now using coins object from library_coin with it's fucntion too we pass in the user input ( cents )
                coins.makeChange(cents);

                // display the results of the calculations - based on # variables placed in html file we will display the data gathered from makeChange function
                $("#quarters").val(coins.quarters);
                $("#dimes").val(coins.dimes);
                $("#nickels").val(coins.nickels);
                $("#pennies").val(coins.pennies);

            }
            catch (e) {
                //error message will be displayed IF error try fails
                alert(e.message);
            }

            //set the focus on cents for the textbox - 
            $("#cents").focus();
        }
    }); // end click() method

    // set focus on cents text box on initial load
    $("#cents").focus();

}); // end ready() method