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
        let isCorrect = false;
        for (let letter of this.letters) {
            if (!letter.isGuessed) {
                if (letter.checkChar(key)) {
                    isCorrect = true;
                }
            }
        }
        return isCorrect;
    }
    remainingLetters() {
        return this.letters.length - this.letters.filter(letter => letter.isGuessed).length;
    }
}

module.exports = Word;