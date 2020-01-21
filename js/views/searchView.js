import { elements } from './base.js';


export const getSourceInput = () => elements.search.value;

export const getTargetInput = () => elements.target.value;

export const getSourceLang = () => elements.sourceLang.value;

export const getTargetLang = () => elements.targetLang.value;

export const changeSourceInput = (inputText) => {
    elements.search.value = inputText;
};

export const changeTargetInput = (inputText) => {
    elements.target.value = inputText;
};

export const clearExtras = () => {
    elements.extraContainer.innerHTML = '';
};

const renderExtra = (extra, sourceLang, targetLang) => {
    const markup = `
        <div class="extra-info-container">
                <header class="extra-info-header">${sourceLang} to ${targetLang}</header>
                <div class="extra-info">
                    <div class="extra-info-segment-container">
                        <h3 class="extra-info-segment-title extra-info-title">Segment</h3>
                        <p class="extra-info-segment">${extra.segment}</p>
                    </div>
                    <div class="extra-info-translation-container">
                        <h3 class="extra-info-translation-title extra-info-title">Translation</h3>
                        <p class="extra-info-translation">${extra.translation}</p>
                    </div>
                </div>
            </div>
    `;

    elements.extraContainer.insertAdjacentHTML('beforeend', markup);

};

export const renderExtras = (extras, sourceLang, targetLang) => {
    extras.forEach(extra => {
        renderExtra(extra, sourceLang, targetLang);
    });
};

export const SwapLang = () => {
    const sourceCode = elements.sourceLang.value;
    const targetCode = elements.targetLang.value;

    elements.sourceLang.value = targetCode;
    elements.targetLang.value = sourceCode;

};
