const axios = require('axios');
// My API key is stored in a constant
const API_KEY = '29484059-072d6a524128743cd311d2d11';

export default class ImagesApiService {
  constructor() {
    this.HITS_PER_PAGE = 40;
    this.searchQuery = '';
    this.page = 1;
    this.isLoading = false;
  }

  async fetchImages() {
    axios.defaults.baseURL = 'https://pixabay.com/api';
    this.isLoading = true;
    const response = await axios.get(
      `/?key=${API_KEY}&q=${this.searchQuery}&page=${this.page}&per_page=${this.HITS_PER_PAGE}&image_type=photo&orientation=horizontal&safesearch=true`
    );
    this.incrementPage();
    this.isLoading = false;
    return response;
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