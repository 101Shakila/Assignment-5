"use strict";
const game = {
    player1: new Pig(),  // Instance of Pig class for player 1
    player2: new Pig(),  // Instance of Pig class for player 2
    currentPlayer: null, // Reference to the current player

    // Read-only property to check if player names are valid
    get isValid() {
        // Check if either player1 or player2 name is empty
        if (this.player1.name === "" || this.player2.name === "") {
            return false;
        } else {
            return true;
        }
    },

    // Method to start a new game
    start(name1, name2) {
        // Set player names
        this.player1.name = name1;
        this.player2.name = name2;
        // Set current player to player 1
        this.currentPlayer = this.player1;
        return this;  // Return game object for method chaining
    },

    // Method to reset the game
    reset() {
        // Call the reset() method on each of the player Pig objects
        this.player1.reset();
        this.player2.reset();
        return this;  // Return game object for method chaining
    },

    // Method to change the current player
    changePlayer() {
        // Determine whether player1 or player2 is the current player, then
        // update the currentPlayer property to hold the other player
        this.currentPlayer = (this.currentPlayer === this.player1) ? this.player2 : this.player1;
        return this;  // Return game object for method chaining
    },

    // Method to hold the current player's score and update their total
    hold() {
        // Call the hold() method of the current player
        this.currentPlayer.hold();

        // Determine whether player1 or player2 is the current player, then
        // update that player's score with the current total
        if (this.currentPlayer === this.player1) {
            $("#score1").val(this.currentPlayer.total);
        } else {
            $("#score2").val(this.currentPlayer.total);
        }
        return this;  // Return game object for method chaining
    },

    // Method to check if there's a winner
    checkWinner() {
        // Check the players' totals to see if either is at or above 100 points
        // If so, return that player's name. Otherwise, return the string "none"
        if (this.player1.total >= 100) {
            return this.player1.name;
        } else if (this.player2.total >= 100) {
            return this.player2.name;
        } else {
            return "none";
        }
    }
};
