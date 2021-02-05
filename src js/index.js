const api = new API()

api.fetchGames()
.then(games => 
    { games.forEach(game => {
        const gg = new Game(game)
    })

})
