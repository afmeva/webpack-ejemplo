import "./index.scss"
import Search from "./components/search";
import SpotifyService from './components/spotify.service'
import SearchResults from "./components/searchResults";

const spotifyService = new SpotifyService()
const searchResult = new SearchResults()

const search = new Search(value => {
    spotifyService.searchTerm(value).then(({tracks}) => {
        const parseTracks = tracks.items.map((track) => {
            return {
                title: track.name,
                imgUrl: track.album.images[0].url,
                previewUrl: track.preview_url
            }
        })

        searchResult.render(parseTracks)
    })
})
