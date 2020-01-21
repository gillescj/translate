import Search from './models/Search.js';
import * as searchView from './views/searchView.js';
import { elements, renderLoader, clearLoader } from './views/base.js';

const state = {};

const controlSearch = async () => {

    const query = searchView.getSourceInput();

    if (query) {
        const sourceLang = searchView.getSourceLang();
        const targetLang = searchView.getTargetLang();
        state.search = new Search(query, sourceLang, targetLang);

        searchView.clearExtras();
        renderLoader(elements.extraContainer);

        try {
            await state.search.getTranslation();
            state.search.getSourceLang();
            state.search.getTargetLang();
            const resultObj = state.search.result;

            if (resultObj.responseStatus != 403) {
                const translation = resultObj.responseData.translatedText;

                searchView.changeTargetInput(translation);
                clearLoader();
                searchView.renderExtras(resultObj.matches, state.search.sourceLang, state.search.targetLang);
            }

        } catch (error) {
            console.log(error);
        }
    }
}

// Events

elements.mainHeader.addEventListener('click', e => {
    window.location.href = window.location.href;
});

elements.searchBtn.addEventListener('click', e => {
    controlSearch();
});

elements.search.addEventListener('keyup', e => {
    if (e.key === "Enter") {
        controlSearch();
    }
});

elements.swapBtn.addEventListener('click', e => {
    searchView.SwapLang();
});
