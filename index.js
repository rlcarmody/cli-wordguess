const Word = require('./word');
const inquirer = require('inquirer');
const fs = require('fs');
const gameOver = require('./gameovertext');
const shuffle = array => {
    const length = array.length - 1;
    for (let i = length; i > 0; i--) {
        const j = Math.floor(Math.random() * (length + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const playGame = (words, round) => {
    let remainingGuess = 10;
    console.log(`\n${words[round].showWord()}\n`);
    const promptForGuess = () => {
        inquirer.prompt([
            {
                message: 'Guess a letter',
                name: 'guess',
                validate: input => {
                    if (input.length > 1 || input.length < 1) {
                        return ('Enter one and only one letter')
                    } return true;
                }
            }
        ]).then(input => {
            words[round].guessLetter(input.guess) ? console.log('\x1b[32m','\nCORRECT!','\x1b[37m') : console.log('\x1b[31m','\nINCORRECT!','\x1b[37m','\nRemaining Guesses: ' + --remainingGuess);
            const currentWord = words[round].showWord();
            console.log(`\n${currentWord}\n`);
            if (words[round].remainingLetters() && remainingGuess) {
                promptForGuess();
            } else if (++round < words.length) {
                playGame(words, round);
            } else {console.log('\x1b[31m',gameOver.text,'\x1b[30m');}
        })
    }
    promptForGuess();
}

fs.readFile('wordlist.txt', 'utf8', (err, data) => {
    if (err) { throw err };
    const wordArray = data.split(/\r?\n|\n/);
    shuffle(wordArray);
    wordArray.forEach((item, index, arr) => {
        arr[index] = new Word(arr[index]);
    });
    playGame(wordArray, 0);
});




