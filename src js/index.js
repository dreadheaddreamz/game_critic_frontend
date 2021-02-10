//const main = document.querySelector('main')
const api = new API()

api.fetchGames()
.then(games => {
  games.forEach( game => new Game(game))

})

let gameForm = document.getElementById('game-critic-form')
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
            Game.formSubmit(data)
            let gameBlock = document.createElement('div.area')
            main.append(gameBlock)
            gameBlock.className = 'area'
            gameBlock.dataset.id = data.id;
            gameBlock.innerHTML = `<img src=${data.image_url}>
            <br>
            <h5> Video Game: ${data.title}<h5>
            <h5> Description: ${data.description} <h3> Comments </h3>
            <div class="comments" id="comments"> </div>
            <form id="comment-form">
            <br>
            <textarea name="comment" style="resize: none" placeholder="comments"></textarea>
            <br>
            <br>
            <button type="submit">Add Comment </button>`
        })

Game.get();