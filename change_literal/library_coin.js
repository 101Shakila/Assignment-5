
"use strict";

//object literal - contains both properties & Methods ( which was being used in calculate.js)
const coins = {
    //start off my setting the values to 0 so when its called again its starting fresh
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0,
    makeChange(cents) {
        //Basic condition is set to make sure cents isn't empty AND between 0 and 99.
        if (isNaN(cents) || cents < 0 || cents > 99) {
            throw new Error("Invalid number of cents. Please enter a value between 0 and 99.");
        }

        //Here we will set the values for all the variables and then find the remainder to calculate any remaining values
        this.quarters = Math.floor(cents / 25);
        cents %= 25;

        this.dimes = Math.floor(cents / 10);
        cents %= 10;

        this.nickels = Math.floor(cents / 5);
        cents %= 5;

        this.pennies = cents;
    }
};
