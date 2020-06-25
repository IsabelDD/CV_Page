import i18n from 'i18next';
import Vocabulary_en from './locales/en/Vocabulary_en.json';
import Vocabulary_es from './locales/es/Vocabulary_es.json';

const languages_avaliable = [ 'en', 'es'];

i18n.init({

    interpolation:{escapeValue: false},
    fallbackLng: languages_avaliable.includes(navigator.language) ? navigator.language : 'es',

    resources: {
        en: {
            Vocabulary: Vocabulary_en,
        },
        es: {
            Vocabulary : Vocabulary_es,
        }
    }
});

export default i18n;