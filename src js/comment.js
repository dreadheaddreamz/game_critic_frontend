class Comment {
    constructor(content) {
        this.content = content
    }

    static create(commentObj) {
        let config = {
            method: "POST",
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
        },
        body: JSON.stringify(commentObj)
    };
fetch(commentsUrl, config)
.then(rep => {return rep.json();
})
.then(object => {
    commentObj.id = object.id;
    Comment.call.push(commentObj)
    let comArea = document.createElement('li');
    comArea.classList.add('comment');
    comArea.setAttribute("id", `${commentObj.id}`)
    comArea.innerHTML = `<p>${commentObj.content}    <button id='delete'>delete</button>`
    let comDiv = document.querySelector('#commemnts')
    comDiv.appendChild(comArea)
        })
    }
    static formSubmit(object){
        let comment = new Comment(object.content);
        CommentRender.create(comment);
    }
}
    let commentForm = document.querySelector('#comments-form')
        commentForm.addEventListener('submit', function(e){
            if (e){
            e.preventDefault();
            let data = {
                content: e.target.value
            }
            Comment.formSubmit(data);
            this.getElementByTagName('input').comment.value
            }
        })