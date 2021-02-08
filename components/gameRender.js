const main = document.querySelector('main')

class GameRender {
    constructor(game) {
    const area = document.createElement('div.area')
        main.append(area)
        area.classname = 'area'
        area.dataset.id = game.id;
        area.innerHTML = `<img src=${game.image_url}>
        <br>
        <h5> Video Game: ${game.title}<h5>
        <h5> Description: ${game.description}`

        
        let gameForm = document.querySelector('#game-critic-form')
        gameForm.addEventListener('submit', function(e){
            e.preventDefault();
            let data = {
                id: e.target.dataset.id,
                title: e.target.title.value,
                description: e.target.description.value,
                date: e.target.date.value,
                upVotes: 0,
                downVotes: 0,
                comments: [],
                image_url: e.target.image_url.value
            }
            Game.createGame(data);
        })
        
        //const gameTitle = document.createElement('p')
        //gameTitle.innerText = game.title
        //block.append(gameTitle)

        this.gameList = document.createElement('ul')
        area.append(this.gameList)
    
        this.game = game

        //const li = document.createElement('li')
        //this.gameList.append(li)
        //li.innerText = `${game.title}`
        }
    }