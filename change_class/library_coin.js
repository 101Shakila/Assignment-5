"use strict";

class Coins {
    constructor() {
        this.quarters = 0;
        this.dimes = 0;
        this.nickels = 0;
        this.pennies = 0;
    }

    makeChange(cents) {
        if (isNaN(cents) || cents < 0 || cents > 99) {
            throw new Error("Please enter a valid number between 0 and 99");
        }

        this.quarters = Math.floor(cents / 25);
        cents %= 25;

        this.dimes = Math.floor(cents / 10);
        cents %= 10;

        this.nickels = Math.floor(cents / 5);
        this.pennies = cents % 5;
    }
}
