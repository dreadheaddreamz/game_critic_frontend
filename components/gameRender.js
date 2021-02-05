const main = document.querySelector('main')

class GameRender {
    constructor(game) {
    
        const block = document.querySelector('#gamesection')
        main.append(block)
        block.classname = 'block'
        block.dataset.id = game.id;
        block.innerHTML = `<img src=${game.image_url}>
        <h5> Video Game: ${game.title}<h5>
        <h5> Description: ${game.description}`

        const addButton = document.createElement('button')
        addButton.innerText = "Add Game"
        block.append(addButton)
        addButton.addEventListener('click', game.createGame)
        
        //const gameTitle = document.createElement('p')
        //gameTitle.innerText = game.title
        //block.append(gameTitle)

        this.gameList = document.createElement('ul')
        block.append(this.gameList)
    
        this.game = game

        //const li = document.createElement('li')
        //this.gameList.append(li)
        //li.innerText = `${game.title}`
        }
    }