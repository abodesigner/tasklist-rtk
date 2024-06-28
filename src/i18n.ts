// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";
// import LanguageDetector from "i18next-browser-languagedetector";
// import Backend from "i18next-http-backend";
// i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
//     debug: true,
//     fallbackLng: "en",
// });
// export default i18n;

import i18n from "i18next";
// import enLang from './locale/en.json'
// import arLang from './locale/ar.json'
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

export const supportedLngs = {
    en: "English",
    ar: "Arabic (العربية)",
};

i18n.use(HttpApi).use(LanguageDetector).use(initReactI18next).init({
    // resources: {
    //     en: { ...enLang },
    //     ar: { ...arLang }
    // },
    // lng: "en",
    supportedLngs: Object.keys(supportedLngs),
    debug: true     // Set the initial language of the App
});