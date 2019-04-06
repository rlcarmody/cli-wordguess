class Letter {
    constructor(char) {
        const regex = /[A-Z]/;
        this.char = char.toUpperCase();
        this.isGuessed = !regex.test(this.char);
    }
    toString() {
        return this.isGuessed ? this.char : '_';
    }
    checkChar(key) {
        const guess = key.toUpperCase() === this.char;
        if (guess) {
            this.isGuessed = true;
        }
        return guess;
    }
}

module.exports = Letter;