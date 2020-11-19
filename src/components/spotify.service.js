class SpotifyService {
    searchTerm(term) {

        //`https://api.spotify.com/v1/search?q=${term}&type=track`
        return fetch('https://api.spotify.com/v1/search?q=' + term +'&type=track', {
            headers: {
                Authorization: 'Bearer BQAw9v3t_iGbISIagNYsbWSZ4K2833N95zRAOjJAYdyCrf0W4GrJMC_uIpCzkTVIG16wb_wGXog8AWtt70YLEiPHbiT_C5oDscqrAoSwijLh5qHcNJlrWlpfK2KQzRj2_1slo1sg9A'
            }
        })
        .then(response => response.json())
    }
}

export default SpotifyService
