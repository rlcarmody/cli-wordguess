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
        if (key.toUpperCase() === this.char) {
            this.isGuessed = true;
        }
        return this.isGuessed;
    }
}

module.exports = Letter;