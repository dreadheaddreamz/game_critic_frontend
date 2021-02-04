class Comment {
    constructor(content, game_id) {
        this.content = content
        this.game_id = game_id
    }

    set id(id){
        this._id = id
    }

    get id() {
    return this._id
    }
    
    static all = []

    static create(newComment) {
        let configCom = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newComment)
        };
        fetch(commentsUrl, configCom)
        .then(resp => {return resp.json();
        })
        .then(object => {newComment.id = object.id;
        Comment.all.push(newComment)
        let commentArea = document.querySelector('#comment-form')
        commentArea.classList.add('comment')
        commentArea.setAttribute("id", `${newComment.id}`)
        commentArea.innerHTML = `<p>${newComment.content} <button id="delete>delete</button>`
        let block = document.getElementsByClassName('block')[(parseInt(`${newComment}.game_id`,10)-1)]
        let comsection = block.getElementsByClassName('comment_section')[0];
        comsection.appendChild(commentArea)
        commentArea.getElementsByTagName('button')[0].addEventListener('click', function(e){
            e.preventDefault();
            commentArea.parentNode.removeChild(commentArea);
            Comment.submit(newComment)
            })
        })
    }

    static delete(cm) {
        let data = {
            id: cm.id,
            content: cm.content,
            game_id: cm.game_id
        }
        let configComm = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(cm)
        };
        fetch(commentsUrl + `${cm.id}`, configComm)
    }

    static makeComment(coms,list){
        coms.forEach(com => {
          let line = document.createElement('li');
          line.innerHTML = `<p>${comment.content}    <button id='delete'>delete</button>`;
          line.getElementsByTagName('button')[0].addEventListener('click',function(e){
            e.preventDefault();
            Comment.delete(coms);
            line.parentNode.removeChild(line)
          })
          list.appendChild(line)
        })
      }
    
    static submit(object){
        let comment = new Comment(object.content,object.game_id);
        Comment.create(comment);
    }


}

