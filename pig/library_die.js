"use strict";

class Die {
	constructor() {
		// Constructor doesn't need to do anything for now
	}

	// Method to roll the die and get a random number between 1 and 6
	rollDie() {
		// Generate a random number between 0 and 1
		let random = Math.random();
		// Scale and convert it to an integer between 0 and 5
		random = Math.floor(random * 6);
		// Return a number between 1 and 6
		return random + 1;
	}
}
