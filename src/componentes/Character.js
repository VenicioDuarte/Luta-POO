class Character {
    #life = 1
    maxLife = 1
    attack = 0
    defense = 0
    constructor(name) {
        this.name = name
    }

    get life() {
        return this.#life
    }

    set life(newLife) {
        this.#life = newLife < 0 ? 0 : newLife
    }
}