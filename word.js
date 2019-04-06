const Letter = require('./letter');

class Word {
    constructor(input) {
        this.letters = [];
        [...input].forEach(item => {
            this.letters.push(new Letter(item));
        })
    }
    showWord() {
        return this.letters.join(' ');
    }
    guessLetter(key) {
        let isCorrect = 0;
        for (let letter of this.letters) {
            if (letter.checkChar(key)) {
                isCorrect++;
            }
        }
        return isCorrect;
    }
    remainingLetters() {
        return this.letters.length - this.letters.filter(letter => letter.isGuessed).length;
    }
}

module.exports = Word;