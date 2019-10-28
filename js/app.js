/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
const keys = document.getElementsByClassName('key');

for (let key of keys) {
    key.addEventListener('click', function(event) {
        game.handleInteraction(event);
    }); //initiates event handler for on screen keyboard
            //event triggers on key click
}

document.getElementById('btn__reset').addEventListener('click', () => {
    game = new Game();
    game.startGame();
}); // event handler for start game button
        // event triggers on button click

document.addEventListener('keydown', function(event) {
    game.handleKeyboardInteraction(event);
}); // event handler for hardware keyboard
        //event triggers on keydown

