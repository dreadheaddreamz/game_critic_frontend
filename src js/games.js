class Game{
    constructor(data) {
        this.id = data.id
        this.title = data.title
        this.date = data.date
        this.description = data.description
        this.comments = data.comments
        this.upVotes = data.upVotes
        this.downVotes = data.downVotes
        this.image_url = data.image_url

    
        function gameDepend() {
            const games = data.map(games => new Game(games.game_id, games.title, games.data, games.description, games.comments, games.upVotes, games.downVotes, games.image_url))
            games.forEach(game => this.create(game))
        }
            this.block = new GameRender(this, gameDepend)
    }

    createGame = () => {
        api.postGame(this.id)
        .then(gameDepend => {
            const newGame = new Game(gameDepend)
            this.block.gameList(newGame)
        })
        .catch(console.log)
    }
}