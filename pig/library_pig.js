"use strict";

class Pig {
	constructor() {
		//Here we are going to create a new instance of the Die class
		this.die = new Die();
		// Here we got to initialize player properties everytime we start a game
		this.name = "";    // Player's name
		this.total = 0;    // Total score of the player
		this.turn = 0;     // Current turn score
		this.roll = 0;     // Current roll value
	}

	// Getter method to check if the player has rolled a 1 ( which is called BUSTED)
	get isBust() {
		// Return true if the roll is 1, indicating the player has busted
		return (this.roll == 1) ? true : false; //Ternary operator - ?: is the same as if-else
	}

	// Method for the player to take a turn - ( when they click roll)
	takeTurn() {
		// Roll the die and store the result in roll property
		this.roll = this.die.rollDie();

		// Update or reset the turn property based on result of die roll
		// If roll is 1, turn score is reset to 0
		// Otherwise, add the roll value to the turn score
		this.turn = (this.roll === 1) ? 0 : this.turn + this.roll;
	}

	// Method to hold the turn, i.e., finalize the current turn score
	hold() {
		// Add the current turn score to the total score
		this.total = this.total + this.turn;
		// Reset turn-specific properties for the next turn
		this.roll = 0;
		this.turn = 0;
	}

	// Method to reset all player properties
	reset() {
		this.total = 0;    // Reset total score
		this.roll = 0;     // Reset roll value
		this.turn = 0;     // Reset turn score
	}
}
