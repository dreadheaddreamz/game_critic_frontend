const gameUrl = "http://localhost:3000/games"
class Game{
    constructor(game_id, title, date, description, comments, upVotes, downVotes, image_url){
    this.game_id = game_id
    this.title = title
    this.date = date
    this.description = description
    this.comments = comments
    this.upVotes = upVotes
    this.downVotes = downVotes
    this.image_url = image_url
    }

    static all = []

    static create(postGame) {
        let postGames = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(postGame)
        };
        fetch(gamesUrl, postGames)
        .then(resp => {return resp.json();
        })
        .then(object => {postGame.id = object.id;
        Game.all.push(postGame)
            })
        }


    static get() {
        fetch(gameUrl)
        .then(resp => {return resp.json()})
        .then(data => Game.make(data))
      }

    static make(data) {
        let games = data.map(games => new Game(games.game_id, games.title, games.data, games.description, games.comments, games.upVotes, games.downVotes, games.image_url))
        games.forEach(game => this.renderGame(game))
    }
  

    static renderGame(game) {
       let gameBlock = document.querySelector('#gamesection')
       gameBlock.className = "block";
       gameBlock.dataset.id = game.game_id;
       gameBlock.innerHTML = `<img src=${game.image_url}>
       <h5>Video Game: ${game.title}</h5>
       <p>Description: ${game.description}</p>
       <button class= 'comments_showhide' id='comments_showhide'>comments</button>
       <br>
       <br>
       <br>
       <form id='comment-form' class='form' display='' action="">
        <input type='text' name='comment' id='comment-input' cols='30' rows'10'>
        <br>
        <button id='submit'>submit</button>
        </form>
        <div class='comment_section' display="">
      <ul>
      </ul>
    </div>`
        let commentSection = gameBlock.getElementsByClassName('comment_section')[0].getElementsByTagName('ul')[0];
        Comment.makeComment(game.comments, commentSection)

       let commentForm = gameBlock.getElementsByClassName('form')[0];
       commentForm.style.display = "";

       let container = gameBlock.getElementsByClassName('comment_section')[0];
       container.style.display = "";

       commentForm.addEventListener('submit', function(e){
           e.preventDefault();
           let data = {
               content: e.target.comment.value,
               game_id: e.target.parentNode.dataset.id
           }
           Comment.submit(data);
           this.getElementsByTagName('input').comment.value = ''
       });
       let blocks = Array.prototype.slice.call(document.getElementsByClassName('block'))
       if(!blocks.some(e => {return e.dataset.id === gameBlock.dataset.id})){
           main.appendChild(gameBlock)
       }

       
    }


}
Game.get();