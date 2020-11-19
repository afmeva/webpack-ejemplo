class SearchResults {
    constructor() {
        this.cardWrapper = document.querySelector('#cardWrapper')
    }

    createCard(track) {
        const template = `
            <div class="card">
              <img src="${track.imgUrl}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${track.title}</h5>
                ${
                    track.previewUrl ? `<audio controls src="${track.previewUrl}"></audio>` : '<i>preview no disponible</i>'
                }               
              </div>
            </div>`

        return template
    }

    render(tracks) {
        /*
        {
        title,
        imgUrl
        }
         */

        const cards = tracks.map(track => this.createCard(track))
        this.cardWrapper.innerHTML = cards.join('')
    }
}

export default SearchResults;
