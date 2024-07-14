"use strict";

class Die {
	constructor() {
		// Since the die only needs a method we will keep this empty ~ and die OBJECT doesn't require inital properties when created
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
