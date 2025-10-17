class Ship {
    constructor(draft, crew) {
        this.draft = draft
        this.crew = crew
    }
    isWorthIt() {
        let shipWeight = this.draft - (this.crew * 1.5)
        if (shipWeight > 20) {
            return true
        }
        return false
    }

}