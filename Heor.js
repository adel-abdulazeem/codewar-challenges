//define a Hero prototype to be used in a terminal game. The hero should have the following attributes: name, position, health, damage, experience.

class Hero {
    constructor(name, position, health, damage, experience) {
        this.name = name || "Hero"
        this.position = position || "00"
        this.health = health || 100
        this.damage = damage || 5
        this.experience = experience || 0
    }
}