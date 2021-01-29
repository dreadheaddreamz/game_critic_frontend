const gamesUrl = "http://localhost:3000/games"

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
       let gameBlock = document.createElement('div')
       gameBlock.className = "block";
       gameBlock.dataset.id = game.game_id;
       gameBlock.innerHTML = `<img src=${game.image_url}>
       <h5>Video Game: ${game.title}</h5>
       <p>Description: ${game.description}</p>
       <button class= 'comments_showhide' id='comments_showhide'>comments</button>
       <br>
       </div>
       <br>
       <form id='comment-form' class='form' display='none' action="">
        <input type='text' name='comment' id='comment-input' cols='30' rows'10'>
        <br>
        <button id='submit'>submit</button>
        </form>
        <div class='comment_section' display="none">
      <ul>
      </ul>
    </div>
        `
        let commentSection = gameBlock.getElementsByClassName('comment_section')[0].getElementsByTagName('ul')[0];
        Comment.makeDb(game.comments, commentSection)

       let commentForm = gameBlock.getElementsByClassName('form')[0];
       commentForm.style.display = "none";

       commentForm.addEventListener('sumbit', function(e){
           e.preventDefault();
           let data = {
               content: e.target.comment.value,
               game_id: e.target.parentNode.dataset.id
           }
           Game.formSubmit(data);
           this.getElementsByTagName('input').comment.value = ''
       });
       let blocks = Array.prototype.slice.call(document.getElementsByClassName('block'))
       if(!blocks.some(e => {return e.dataset.id === gameBlock.dataset.id})){
           main.appendChild(gameBlock)
       }

       
    }


}
Game.get();