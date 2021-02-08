class Game{
    constructor(data) {
        this.id = data.id
        this.title = data.title
        this.upVotes = data.upVotes
        this.downVotes = data.downVotes
        this.description = data.description
        this.image_url = data.image_url
        this.date = data.date
        this.comments = data.comments
        

    
        function gameDepend() {
            const games = data.map(game => new Game(games.game_id, games.title, games.upVotes, games.downVotes, games.description, games.image_url, games.date, games.comments))
            games.forEach(game => this.create(game))
        }
            this.block = new GameRender(this, gameDepend)
    }

   static createGame = (data) => {
        api.postGames(data.id, data.title, data.description, data.date, data.comments, data.upVotes, data.downVotes, data.image_url)
        .then(gameDepend => {
            //let gs = document.createElement('div')
            //gs.setAttribute("data-id", gameDepend.id)
            //gs.innerHTML = `<img src=${gameDepend.image_url}>
            //<h5> Video Game: ${gameDepend.title}<h5>
            //<h5> Description: ${gameDepend.description}`
        })
    }
}