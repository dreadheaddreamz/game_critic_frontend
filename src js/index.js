const gamesUrl = "http://localhost:3000/games"
const commentsUrl = "http://localhost:3000/comments"
const upVote = "⬆️"
const downVote = "⬇️"
const main = document.querySelector('main');

class Game{
    constructor(game_id, title, date, description, comment, upVotes, downVotes, image_url){
    this.game_id = game_id
    this.title = title
    this.date = date
    this.description = description
    this.comment = comment
    this.upVotes = upVotes
    this.downVotes = downVotes
    this.image_url = image_url
    }

    static all = []


    static get() {
        fetch(gamesUrl)
        .then(resp => {return resp.json()})
        .then(data => Game.make(data))
      }

    static make(data) {
        let games = data.map(games => new Game(games.game_id, games.title, games.data, games.description, games.comment, games.upVotes, games.downVotes, games.image_url))
        games.forEach(game => this.renderGame(game))
    }

    static renderGame(game) {
       let gameBlock = document.querySelector('#gamesection')
       gameBlock.innerHTML = `<img src=${game.image_url}>
       <h5>Video Game: ${game.title}</h5>
       <p>Description: ${game.description}</p>`
       console.log(game)
    }
}
Game.get();