// game where the user has to guess the correct num, but there's a limit of howe many guesses the user can do.
// if user tries to guess more than limit, func should throw an error
// if user guess is right it should return true othewise false


class Guesser {
    constructor(number, lives) {
        this.number = number;
        this.lives = lives;
    }

    guess(n) {
        if (!this.lives) throw Error();
        if (n === this.number) return true;
        this.lives--;
        return false
    }
}

