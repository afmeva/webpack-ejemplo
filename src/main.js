import "./index.scss"
import Search from "./components/search";
import SpotifyService from './components/spotify.service'

const spotifyService = new SpotifyService()

const search = new Search(value => {
    spotifyService.searchTerm(value)
})
