
import articlesTempl from './js/markup';
import NewsApiService from './js/nevs-servise';

const searchForm = document.querySelector('.search-form');
const articlesContainer = document.querySelector('.js-articles-container');
const loadMoreBtn = document.querySelector('.load-more');

const newApiService = new NewsApiService();

searchForm.addEventListener('submit', onSearch);
loadMoreBtn.addEventListener('click', onLoadMore);
loadMoreBtn.classList.add('hidden');
loadMoreBtn.classList.remove('load-more')


function onSearch(e) {
    e.preventDefault();
    loadMoreBtn.classList.add('load-more');
    loadMoreBtn.classList.remove('hidden')
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
