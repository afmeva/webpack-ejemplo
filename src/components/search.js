class Search {
    constructor(onSubmit) {
        this.inputSearch = document.querySelector("#inputSearch")
        this.formSearch = document.querySelector("#formSearch")

        this.formSearch.addEventListener('submit', (evt) => {
            evt.preventDefault()

            const value = this.inputSearch.value
            onSubmit(value)
        })

    }
}

export default Search
