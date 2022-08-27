
import articlesTempl from './js/markup';
import NewsApiService from './js/nevs-servise';

const searchForm = document.querySelector('.search-form');
const articlesContainer = document.querySelector('.js-articles-container');
const loadMoreBtn = document.querySelector('.load-more');

const newApiService = new NewsApiService();

searchForm.addEventListener('submit', onSearch);
loadMoreBtn.addEventListener('click', onLoadMore);



function onSearch(e) {
    e.preventDefault();
  
    newApiService.query = e.currentTarget.elements.searchQuery.value.trim();
    newApiService.resetPage();
    newApiService.fethArticle().then(appendArticlesMarkup);



};

function onLoadMore() {
    newApiService.fethArticle().then(appendArticlesMarkup);
};

function appendArticlesMarkup(hits) {
    articlesContainer.insertAdjacentHTML('beforeend', hits.map(articlesTempl).join(''));
}
