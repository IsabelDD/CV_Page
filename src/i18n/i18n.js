import i18n from 'i18next';
import Vocabulary_en from './locales/en/Vocabulary_en.json';
import Vocabulary_es from './locales/es/Vocabulary_es.json';
import Vocabulary_gl from './locales/gl/Vocabulary_gl.json';

const languages_avaliable = [ 'en', 'es', 'gl'];

i18n.init({

    interpolation:{escapeValue: false},
    fallbackLng: languages_avaliable.includes(navigator.language) ? navigator.language : 'es', //Language by default

    resources: {
        en: {
            Vocabulary: Vocabulary_en,
        },
        es: {
            Vocabulary : Vocabulary_es,
        },
        gl: {
            Vocabulary: Vocabulary_gl,
        }
    }
});

export default i18n;