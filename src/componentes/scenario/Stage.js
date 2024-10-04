/*
1 - saber as informações quem tá lutando 
(qual o id que tem as informações do lutador 1 ou lutador 2)
2 - atualizar o placar
3 - ação de atacar de ambos os lutadores
*/

class Stage {
    constructor(char1, char2, char1El, char2El, logObject) {
        this.char1 = char1
        this.char2 = char2
        this.char1El = char1El
        this.char2El = char2El
        this.log = logObject
    }

    // inicia o jogo
    start() {
        this.update()

        this.char1El.querySelector('.attack-button').addEventListener('click', () => this.doAttack(this.char1, this.char2))
        this.char2El.querySelector('.attack-button').addEventListener('click', () => this.doAttack(this.char2, this.char1))
    }

    // atualizar a tela com as informações
    update() {
        // char 1
        this.char1El.querySelector('.name').innerHTML = `${this.char1.name} - ${this.char1.life.toFixed(1)} HP`
        // barra de vida
        let char1HP = (this.char1.life / this.char1.maxLife) * 100
        this.char1El.querySelector('.bar').style.width = `${char1HP}%`

        // char 2
        this.char2El.querySelector('.name').innerHTML = `${this.char2.name} - ${this.char2.life.toFixed(1)} HP`
        // barra de vida
        let char2HP = (this.char2.life / this.char2.maxLife) * 100
        this.char2El.querySelector('.bar').style.width = `${char2HP}%`
    }

    doAttack(attacking, attacked) {
        //console.log(`${attacking.name} está atacando ${attacked.name}`)

        if (attacking.life <= 0 || attacked.life <= 0) {
            this.log.addMessage('Atacando cachorro morto.')
            return
        }

        // gerar um número aleatório para o attack
        let attackFactor = (Math.random() * 2).toFixed(1)
        // gerar um número aleatório para o defense
        let defenseFactor = (Math.random() * 2).toFixed(1)
        
        let actualAttack = attacking.attack * attackFactor
        let actualDefense = attacked.defense * defenseFactor
        
        if (actualAttack > actualDefense) {
            attacked.life -= actualAttack
            this.log.addMessage(`${attacking.name} causou ${actualAttack.toFixed(1)} de dano em ${attacked.name}.`)
        } else {
            this.log.addMessage(`${attacked.name} conseguiu defender...`)
        }

        // atualizar os dados
        this.update()
    }
}