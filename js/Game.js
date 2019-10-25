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
    }

    getRandomPhrase() {
        const phrases = this.phrases;
        const randomPhrase = Math.floor(Math.random() * 5);
        return phrases[randomPhrase];
    }

}                         

 


