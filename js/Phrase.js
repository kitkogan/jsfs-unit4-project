/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
    constructor(phrase) {
       this.phrase = phrase.toLowerCase(); 
    } // actual phrase object is representing, set to lower case
    
    addPhraseToDisplay(){
        
        const ul = document.getElementById('phrase').firstElementChild;
        
        for(let i = 0; i < this.phrase.length; i++){
          
          let li = document.createElement('li');
          li.textContent = this.phrase[i];
      
          if(li.textContent === ' '){
            li.classList.add('hide', 'space');
          } else {
            li.classList.add('hide', 'letter');
          }
          
          ul.appendChild(li);
        }
      } // adds letter placeholders to display on game start

    checkLetter() { 
    
    
    } // checks to see if selected letter matches any letters in the phrase

    showMatchedLetter() {

    } // reveals letter/s on the board that match player selection
}