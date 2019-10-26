/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 
class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase('Six sticky skeletons'),
            new Phrase('Gobbling gargoyles gobbled gobbling goblins'),
            new Phrase('Creepy crawly critters crawl through creepy crawly craters'),
            new Phrase('Dracula digs dreary dark dungeons'),
            new Phrase('Several spooky slimy spiders spun sulking by the sea')
        ];
        this.activePhrase = null;
    } // constructor containing: tracker for num of missed guesses, 
            //bank of phrases the game will randomly choose from, 
            //phrase currently in play

    getRandomPhrase() {
        const phrases = this.phrases;
        const randomPhrase = Math.floor(Math.random() * 5);
        return phrases[randomPhrase];
    } // selects random phrase from phrase property

    // startGame() {
    //     const overlayDiv =  document.getElementById('overlay');
    //     this.activePhrase = this.getRandomPhrase();
    //     const currPhrase = this.activePhrase;
    //     overlayDiv.style.display = 'none';
    //     currPhrase.addPhraseToDisplay;
    // } // selects random phrase and displays it to user on game start
    
    // checkForWin() {
    //     const letters = document.getElementsByClassName('letter');
    //     let notGuessed = 0
    //     for(let letter of letters) {
    //         if(letter.classList.contains('show')) {
    //             notGuessed++;
    //             return 'try again';
    //         }
    //     }
    //     if(notGuessed === 0) {
    //         return 'you win';
    //     }
    // } // checks for winning move

    // removeLife() {
    //     this.missed++;
    //     const minusOne = document.getElementsByTagName('img')[this.missed - 1];
    //     minusOne.setAttribute('src', images/lostHeart.png);
    //     if(hearts[4].getAttribute('src') === 'images/lostHeart.png') {
    //         this.gameOver('sorry you lose');
    //         this.missed = 0;
    //     }
    // } // removes a life from scoreboard

    // gameOver(gameWon) {
    //     const endGame = document.querySelector('#game-over-message');
    //     overlayDiv.classList.remove('start');
    //     document.getElementById('btn__reset').textContent = 'Try again?'
    //     if(gameWon === 'winner') {
    //         overlayDiv.classList.remove('lose');
    //         overlayDiv.classList.add('win');
    //         endGame.textContent = 'You guessed the phrase!'
    //     }
    //     else {
    //         overlayDiv.classlist.remove('win');
    //         overlayDiv.classList.add('lose');
    //         endGame.textContent = 'Sorry, all out of moves!';
    //     }
    
  
    // }

}
