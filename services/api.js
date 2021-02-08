class API {
    constructor(port = 3000) {
        this.url = `http://localhost:${port}`
      }

    parseJSON = response => response.json()

    //headers = {"Accepts": "application/json", "Content-Type": "application/json"}

    get gameurl() {
        return this.url + '/games'
    }

    get commentsUrl() {
        return this.url + '/comments'
    }

    fetchGames = () => {
        return fetch(this.gameurl).then(this.parseJSON)
    }

    fetchComments = () => {
        return fetch(this.commentsUrl).then(this.parseJSON)
    }

    //fetchGame = (id) => {
        //return fetch(this.gameurl + `/${id}`).then(this.parseJSON)
    //}

    /*postComments = (content) => {
        return fetch(this.commentsUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({content: content})
        }).then(this.parseJSON)
    } */


   postGames = (gameid, title, description, date, comments, upVotes, downVotes, image_url) => {
        return fetch(this.gameurl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({game_id: gameid, title: title, description: description, comments: comments, upVotes: upVotes, downVotes: downVotes, image_url: image_url, date:date})
        }).then(this.parseJSON)
    }
}