class API {
    constructor(port = 3000){
        this.url = `http://localhost:${port}`
    }

    parseJSON = response => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw console.error('Not possible')
        }
    }

    //headers = {"Accepts": "application/json", "Content-Type": "application/json"}

    get gameurl() {
        return this.url + '/games'
    }

    fetchGames = () => {
        return fetch(this.gameurl).then(this.parseJSON)
    }

    fetchGame = (id) => {
        return fetch(this.gameurl + `/${id}`).then(this.parseJSON)
    }

    postGames = (gameid) => {
        return fetch(this.gameurl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({game_id: gameid, title: title, description: description, comments: comments, upVotes: upVotes, downVotes: downVotes, image_url: imageurl})
        }).then(this.parseJSON)
    }
}