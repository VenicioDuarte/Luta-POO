class Log {
    list = []

    constructor(listElement) {
        this.listElement = listElement
    }

    addMessage(msg) {
        this.list.push(msg)
        this.render()
    }

    // renderizar as informações na caixa de log
    render() {
        this.listElement.innerHTML = ''

        for (let i in  this.list) {
            this.listElement.innerHTML += `<li>${this.list[i]}</li>`
        }
    }
}