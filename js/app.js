/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const logphrase = (phrase) => {
    console.log('Phrase - phrase: ', phrase.phrase);
};

const game = new Game();

logphrase(game.getRandomPhrase());
logphrase(game.getRandomPhrase());
logphrase(game.getRandomPhrase());
logphrase(game.getRandomPhrase());
logphrase(game.getRandomPhrase());