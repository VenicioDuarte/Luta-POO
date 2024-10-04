let log = new Log(document.querySelector('.log'))

let char = new Knight('John')
let monster = new LittleMonster()

const stage = new Stage(
    char, 
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
)

stage.start()

// console.log(char.name)
// console.log(char.life)
// console.log(char.attack)

// console.log(monster.name)
// console.log(monster.life)
// console.log(monster.attack)