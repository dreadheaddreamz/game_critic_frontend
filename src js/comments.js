class Comments {
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
        let newComment = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newComment)
        };
        fetch(commentsUrl, newComment)
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
            Comment.delete(newComment)
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

    
}

