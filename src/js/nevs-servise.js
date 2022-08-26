export default  class NewsApiService{
    constructor() {
        this.searchQuery = '';
        this.page = 1;
     }
    
    fethArticle() {
        // console.log(this)
        const ulr = `https://pixabay.com/api/?key=29484059-072d6a524128743cd311d2d11&${this.searchQuery}&per_page=5&page=${this.page}`

        return fetch(ulr)
            .then(r => r.json())
            .then(data => {
                console.log(data)
                this.incrementPage();
                return data.articles;
                // console.log(this);
    })
    }

    incrementPage() {
        this.page += 1;
    }
    resetPage() {
        this.page = 1;
    }
    get query() {
        return this.searchQuery;
    }
    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}