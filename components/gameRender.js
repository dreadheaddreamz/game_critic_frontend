/*const main = document.querySelector('main')

class GameRender {
    constructor(game) {
    const area = document.createElement('div.area')
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
        
    let commentForm = area.querySelector('#comment-form')
    let comSection = area.querySelector('#comments')
    Comment.makeFromDb(game.comments, comSection)
    commentForm.addEventListener('submit', function(e) {
            if (e){
            e.preventDefault();
            let data = {
                game_id: e.target.parentNode.dataset.id,
                content: e.target.comment.value
            }
            Comment.formSubmit(data);
            let comPost = document.createElement('li');
            comPost.classList.add('comment');
            comPost.innerHTML = `<p>${data.content}    <button id='delete'>delete</button>`
            e.target.parentNode.getElementsByClassName('comments')[0].append(comPost)
            console.log(e.target.parentNode.getElementsByClassName('comments')[0])
            this.getElementsByTagName('textarea').comment.value = ""
            }
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
        })
        
        //const gameTitle = document.createElement('p')
        //gameTitle.innerText = game.title
        //block.append(gameTitle)

        //this.gameList = document.createElement('ul')
        //area.append(this.gameList)
    
        //this.game = game

        //const li = document.createElement('li')
        //this.gameList.append(li)
        //li.innerText = `${game.title}`
        }
    }*/
