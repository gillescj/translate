export const elements = {
    mainHeader: document.querySelector('.main-header'),
    search: document.querySelector('.search'),
    searchBtn: document.querySelector('.search-btn'),
    sourceLang: document.querySelector('.language-source'),
    targetLang: document.querySelector('.language-target'),
    swapBtn: document.querySelector('.lang-swap'),
    target: document.querySelector('.translation'),
    extraContainer: document.querySelector('.extra-outputs-container'),
};

export const renderLoader = parent => {
    const loader = `
    <div class="loader">
            <div class="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    `;
    parent.insertAdjacentHTML('afterbegin', loader);
};

export const clearLoader = () => {
    const loader = document.querySelector(`.loader`);
    if (loader) loader.parentElement.removeChild(loader);
}
