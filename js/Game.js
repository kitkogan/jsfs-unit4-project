/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 
class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrase();
        this.activePhrase = null;
    } // constructor containing: tracker for num of missed guesses, 
            //bank of phrases the game will randomly choose from, 
            //phrase currently in play

    getRandomPhrase() {
        const phraseIndex = Math.floor(Math.random() * 5);
        return this.phrases[phraseIndex];
    } // selects random phrase from phrase property

    createPhrase() {
        const phraseDisplayed = [];
        const phrases =  [
        'Six sticky skeletons',
        'Gobbling gargoyles gobbled gobbling goblins',
        'Creepy crawly critters crawl through creepy crawly craters',
        'Dracula digs dreary dark dungeons',
        'Several spooky slimy spiders spun sulking by the sea'
    ];

    for (let phrase of phrases) {
        phraseDisplayed.push(new Phrase(phrase));
    }

    return phraseDisplayed;

    }

    startGame() {
        this.resetGame();
        document.getElementById('overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    } // selects random phrase and displays it to user on game start

   handleInteraction(event) {
       const button = event.target;
       const letter = button.textContent;
       const match = this.activePhrase.checkLetter(letter);
       button.disabled = true;

       if(match) {
           button.className += ' ' + 'chosen';
           this.activePhrase.showMatchedLetter(letter);
           if(this.checkForWin()) {
               this.gameOver("You guessed the phrase!");
           }
        } else {
            button.className += ' ' + 'wrong';
            this.removeLife();

       }
   }
    
   handleKeyboardInteraction(event) {
       let button;
       const keys = document.getElementsByClassName('key');
       const letter = event.key;
       const match = this.activePhrase.checkLetter(letter);

       for (let key of keys) {
           if (key.textContent == event.key) {
           button = key;

           }
   
        }

        if (button && !button.disabled) {
            button.disabled = true;

            if (match) {
                button.className += ' ' + 'chosen';
                this.activePhrase.showMatchedLetter(letter);

                if(this.checkForWin()) {
                    this.gameeOver("You guessed the phrase!")
                }
            } else {
                button.className += ' ' + 'wrong';
                this.removeLife();
            }
        }
    }
    
    checkForWin() {
        const phraseBank = document.getElementById('phrase');
        const keys = phraseBank.querySelectorAll('li');

        for(let key of keys) {
            let keyClassName = key.className;
            
            if (keyClassName !== 'space') {
                if (keyClassName.includes('hide')){
                    return false;
                }
            }
               
        }
        
        return true;
    }
       
     // checks for winning move

    removeLife() {
        const lives = document.querySelectorAll('#scoreboard img');

        for (let img of lives) {
            if (img.src.inclues(liveHeart.png)){
                img.src = 'images/lostHeart.png';
            }
        
        this.missed += 1;

        if (this.missed >= 5) {
            this.gameOver('Sorry, you did not guess the phrase!');

            }
    
        } // removes a life from scoreboard
    }
    gameOver(message) {
        const overlayDiv = document.getElementById('overlay');
        overlayDiv.style.display('block');
        document.getElementById('game-over-message').textContent = message;

        if(this.missed >= 5) {
            const phrase = this.activePhrase.phrase;
            const gameLostMsg = document.createElement('h1');
            const span = document.createElement('span');

            gameLostMsg.id = 'another-message';
            gameLostMsg.textContent = 'The mystery phrase was: ';
            span.textContent = `"${phrase}"`;
            gameLostMsg.appendChild(span);
            document.getElementsById('overlay').appendChild(gameLostMsg);

            overlayDiv.className = 'lose';
        }
        else {
            overlayDiv.className = 'win';
        }
    
    }

    resetGame(){
        $('#phrase ul').children().remove();
        $("#another-message").remove();
        $('.chosen').attr('class', 'key');
        $('.wrong').attr('class', 'key');
        $('key').prop('disabled', false);
        $('.tries img').attr('src', 'images/liveHeart.png');
    }

}
