/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
       this.phrase = phrase.toLowerCase(); 
    } // actual phrase object is representing, set to lower case
    
    addPhraseToDisplay(){
        const phraseDiv = document.getElementById('phrase');
        const phraseUl = phraseDiv.firstElementChild;
        
        for(let character of this.phrase){
          
          const li = document.createElement('li');
      
          if (character === ' ') {
            li.className = "space";
          } else {
            li.className = "hide letter " + character;
          }
          
          li.textContent = character;
          phraseUl.appendChild(li);
        }
    } // adds letter placeholders to display on game start

    checkLetter(letter) {
        return this.phrase.includes(letter.toLowerCase());
    } // checks to see if selected letter matches any letters in the phrase

    showMatchedLetter(letter){
        const matchedElems = document.getElementsByClassName(letter);
        for (let element of matchedElems) {
            element.className = element.className.replace(/hide/, 'show');
        }
    } // reveals letter/s on the board that match player selection

    
}
