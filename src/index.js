
import articlesTempl from './js/markup'
import NewsApiService from './js/nevs-servise';

const searchForm = document.querySelector('.search-form');
const loadMoreBtn = document.querySelector('.load-more');
const articlesContainer = document.querySelector('[name="searchQuery"]')

const newApiService = new NewsApiService();
 
loadMoreBtn.addEventListener('click', onLoadMore);
searchForm.addEventListener('submit', onSearch);


function onSearch(e) {
    e.preventDefault();
  
    newApiService.query = e.currentTarget.elements.searchQuery.value.trim();
    newApiService.resetPage();
    newApiService.fethArticle().then(appendArticlesMarkup);



};

function onLoadMore() {
    newApiService.fethArticle().then(appendArticlesMarkup);
};

function appendArticlesMarkup(articles) {
    articlesContainer.insertAdjacentHTML('beforeend', articlesTempl(articles))
}
