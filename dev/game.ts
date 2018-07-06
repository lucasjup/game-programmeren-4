class Game {
    constructor(){
        console.log("new game created!")

        let player = new Player()
        let score = new Score()
        player.update()
    }
}

window.addEventListener("load", () => new Game())