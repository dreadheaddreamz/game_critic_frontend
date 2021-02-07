const api = new API()

api.fetchGames()
.then(games => {
  games.forEach( game => new Game(game))

})