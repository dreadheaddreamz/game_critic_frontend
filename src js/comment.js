commentUrl = "http://localhost:3000/comments"
class Comment {
    constructor(comment) {
        this.content = comment.content,
        this.game_id = comment.game_id
    }
    static all = []

    //post comment after add comment is clicked
    static create(commentObj) {
        console.log(commentObj)
        let config = {
            method: "POST",
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
        },
        body: JSON.stringify(commentObj)
    };
fetch(commentUrl, config)//asynchronous
.then(rep => {return rep.json();
})
.then(object => {
    commentObj.id = object.id;
    Comment.all.push(commentObj)
    let comArea = document.createElement('li');
    comArea.classList.add('comment');
    //comArea.setAttribute("id", `${commentObj.id}`)
    comArea.innerHTML = `<p id=${commentObj.id}>${commentObj.content}    <button id='delete'>delete</button>`
    let area = document.getElementsByClassName('area')[(parseInt(`${commentObj.game_id}`,10))]
    let comments = comArea.getElementsByClassName('comments')[0];
    comArea.getElementsByTagName('button')[0].addEventListener('click',function(e){
        //deletes the comment(removes child from the parentnode)
        e.preventDefault();
        Comment.delete(commentObj);
        comPost.parentNode.removeChild(comArea)
                })
        e.target.parentNode.getElementsByClassName('comments')[0].append(comPost) //returns an array [0] targets specific element
        })
    }

    // renders comment from back along with event listener for button
    static makeFromDb(comments,list){
    comments.forEach(comment => {
    let line = document.createElement('li');
    line.innerHTML = `<p id=${comment.id}>${comment.content}    <button id='delete'>delete</button>`;
    line.getElementsByTagName('button')[0].addEventListener('click',function(e){ //returns an array [0] targets specific element (deletes child from parent node)
        e.preventDefault();
        Comment.delete(comment);
        line.parentNode.removeChild(line)
            })
            list.appendChild(line)
        })
    }

    // delete comment
    static delete(cid) {
        console.log(cid.id)
      let configObj = {
            method: "DELETE",
            headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
        },
    };
    return fetch(commentUrl + `${cid.id}`, configObj)
}


    //creates new comment
    static formSubmit(object){
        let comment = new Comment(object);
        Comment.create(comment);
        
    }
}