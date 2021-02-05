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
    
}

