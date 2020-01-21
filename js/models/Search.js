import { translationCodes } from './translationCodes.js'

export default class Search {
    constructor(query, sourceLangCode, targetLangCode) {
        this.query = query;
        this.sourceLangCode = sourceLangCode;
        this.targetLangCode = targetLangCode;
    }

    async getTranslation() {

        try {
            const url = `https://api.mymemory.translated.net/get?q=${this.query}&langpair=${this.sourceLangCode}|${this.targetLangCode}`;
            const result = await fetch(url);
            const data = await result.json();
            this.result = data;

        } catch (error) {
            console.log(error);
        }
    }

    getSourceLang() {
        const index = translationCodes.code.findIndex(el => el === this.sourceLangCode);
        if (index !== -1) {
            this.sourceLang = translationCodes.language[index];
        }
    }

    getTargetLang() {
        const index = translationCodes.code.findIndex(el => el === this.targetLangCode);
        if (index !== -1) {
            this.targetLang = translationCodes.language[index];
        }
    }

}