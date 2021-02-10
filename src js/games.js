const gamesUrl = "http://localhost:3000/games"
const main = document.querySelector('main')
class Game {
    constructor(data) {
        this.id = data.id
        this.title = data.title
        this.upVotes = data.upVotes
        this.downVotes = data.downVotes
        this.description = data.description
        this.image_url = data.image_url
        this.date = data.date
        this.comments = data.comments
        Game.all.push(this)
    }
        
        static all = []

        static get(){
            fetch(gamesUrl)
            .then(r => {return r.json()})
            .then(data => Game.make(data))
        }

       static make (data) {
            let games = data.map(game => new Game(game))
            Game.render(games)
        }

        static render(games) {
            games.forEach(game => Game.renderBlock(game))
        }

    
        static renderBlock(game){
            let gameBlock = document.createElement('div.area')
            main.append(gameBlock)
            gameBlock.className = 'area'
            gameBlock.dataset.id = game.id;
            gameBlock.innerHTML = `<img src=${game.image_url}>
            <br>
            <h5> Video Game: ${game.title}<h5>
            <h5> Description: ${game.description} <h3> Comments </h3>
            <div class="comments" id="comments"> </div>
            <form id="comment-form">
            <br>
            <textarea name="comment" style="resize: none" placeholder="comments"></textarea>
            <br>
            <br>
            <button type="submit">Add Comment </button>`
            

        let commentForm = gameBlock.querySelector('#comment-form')
        let comSection = gameBlock.querySelector('#comments')
        Comment.makeFromDb(game.comments, comSection)
        commentForm.addEventListener('submit', function(e) {
            console.log(e.target.parentNode)
            if (e){
            e.preventDefault();
            let data = {
                id: e.target.dataset.id,
                game_id: e.target.parentNode.dataset.id,
                content: e.target.comment.value
            }
            Comment.formSubmit(data);
            let comPost = document.createElement('li');
            comPost.classList.add('comment');
            comPost.innerHTML = `<p>${data.content}    <button id='delete'>delete</button>`
            comPost.getElementsByTagName('button')[0].addEventListener('click',function(e){
                e.preventDefault();
                Comment.delete(data);
                comPost.parentNode.removeChild(comPost)
                    })
            e.target.parentNode.getElementsByClassName('comments')[0].append(comPost)
            console.log(e.target.parentNode.getElementsByClassName('comments')[0])
            this.getElementsByTagName('textarea').comment.value = ""
            }
        })
    }




        static create(gameObj) {
        let config = {
            method: "POST",
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
        },
        body: JSON.stringify(gameObj)
    };
    fetch(gamesUrl, config)
    .then(resp => {return resp.json();
    })
    .then(object =>{
        gameObj.id = object.id
        Game.all.push(gameObj)
        let area = document.createElement('div.area')
        main.append(area)
        area.className = 'area'
        area.dataset.id = game.id;
        area.innerHTML = `<img src=${game.image_url}>
        <br>
        <h5> Video Game: ${game.title}<h5>
        <h5> Description: ${game.description} <h3> Comments </h3>
        <div class="comments" id="comments"> </div>
        <form id="comment-form">
        <br>
        <textarea name="comment" style="resize: none" placeholder="comments"></textarea>
        <br>
        <br>
        <button type="submit">Add Comment </button>`
    })
}

    static makeFromDb(games){
    games.forEach(game => {
    main.append(game)
        })
    }
        

    static formSubmit(object){
        let comment = new Game(object);
        Game.create(comment);
    }

   static create = (data) => {
        api.postGames(data.id, data.title, data.description, data.date, data.comments, data.upVotes, data.downVotes, data.image_url)
        .then(game => {
            //const newGame = new Game(game)
            //console.log(gameDepend)
        })
        //.catch(console.log)
    }
}
Game