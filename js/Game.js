/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 
class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    } // constructor containing: tracker for num of missed guesses, 
            //bank of phrases the game will randomly choose from, 
            //phrase currently in play

    startGame() {
            this.resetGame();
            document.getElementById('overlay').style.display = 'none';
            this.activePhrase = this.getRandomPhrase();
            this.activePhrase.addPhraseToDisplay();
    } // selects random phrase and displays it to user on game start

    getRandomPhrase() {
        const phraseIndex = Math.floor(Math.random() * 6);
        return this.phrases[phraseIndex];
    } // selects random phrase from phrase array

   handleInteraction(event) {
       const button = event.target;
       const letter = button.textContent;
       const match = this.activePhrase.checkLetter(letter);
       button.disabled = true;

       if(match) {
           button.className += " " + "chosen";
           this.activePhrase.showMatchedLetter(letter);
           if(this.checkForWin()) {
               this.gameOver("Nice work! You guessed the phrase!");
           }
        } else {
            button.className += " " + "wrong";
            this.removeLife();
        }
   } // event handler for on-screen keyboard
        // checks for matched letter
        // determines button behavior depending on whether a match is made
            // if metched, at game over the winning phrase will appear
            // if not matched, remove life
    
   handleKeyboardInteraction(event) {
       let button;
       const keys = document.getElementsByClassName("key");
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
                button.className += " " + "chosen";
                this.activePhrase.showMatchedLetter(letter);

                if (this.checkForWin()) {
                    this.gameOver("Nice work! You guessed the phrase!")
                }
            } else {
                button.className += " " + "wrong";
                this.removeLife();
            }
        }
    } // initiates hardware keyboard functionality
        //event handler for onscreen keyboard
           // determines button behavior depending on whether a match is made
             // if metched, at game over the winning phrase will appear
             // if not matched, remove life


    removeLife() {
        const lives = document.querySelectorAll('#scoreboard img');

        for (let img of lives) {
            if (img.src.includes("liveHeart.png")) {
                img.src = 'images/lostHeart.png';
                break;
            }  
        }
        
        this.missed += 1;

        if (this.missed >= 5) {
            this.gameOver('Sorry, you did not guess the phrase!');

        }
    } // removes a life from scoreboard if wrong answer selected

    checkForWin() {
        const phraseDiv = document.getElementById('phrase');
        const keys = phraseDiv.querySelectorAll('li');

        for(let key of keys) {
            let keyClassName = key.className;
            
            if (keyClassName !== 'space') {
                if (keyClassName.includes('hide')){
                    return false;
                }
            }
               
        }
        
        return true;
    } // checks for winning anser selection

    createPhrases() {
        const displayedPhrase = [];
        const phrases = [
            
            "Six sticky skeletons",
            "Gorgoyles gobbling green goblins",
            "Critters crawl through creepy craters",
            "Dracula digs dreary dark dungeons",
            "Spooky spiders spin silks by the sea",
            "Hoot owls haunt halloween houses",
        ];

        for (let phrase of phrases) {
            displayedPhrase.push(new Phrase(phrase));
        }

        return displayedPhrase;

    } // creates an array of potential phrases for the game to display

    gameOver(message) {
        const overlayDiv = document.getElementById('overlay');
        overlayDiv.style.display = 'block';
        document.getElementById('game-over-message').textContent = message;

        if (this.missed >= 5) {
            const phrase = this.activePhrase.phrase;
            const lostGameMsg = document.createElement('h1');
            const span = document.createElement('span');

            lostGameMsg.id = "another-message";
            lostGameMsg.textContent = "The mystery phrase was: ";
            span.textContent = `"${phrase}"`;

            lostGameMsg.appendChild(span);
            document.getElementById('overlay').appendChild(lostGameMsg);

            overlayDiv.className = 'lose';
            $('.key').prop('disabled', true);
            
        } else {
            overlayDiv.className = 'win';
            $('.key').prop('disabled', true);
            
        }


    } // generates the game over messages that will display to user
            // if the num of missed guesses is >= 5, the losing message will display 
                // letting the player know what the mystery phrase was
            // otherwise, the message for winning game will appear 
            // also disables the hardware keyboard to prevent unintended user interaction with game over screen

    resetGame(){
        $('#phrase ul').children().remove();
        $("#another-message").remove();
        $('.chosen').attr('class', 'key');
        $('.wrong').attr('class', 'key');
        $('.key').prop('disabled', false);
        $('.tries img').attr('src', 'images/liveHeart.png');
    } // resets gameboard

}
