
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
const savedLanguage = localStorage.getItem('language') || 'en';
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: savedLanguage,
    debug: true,
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
    detections: {
      order: [
        "htmlTag",
        "localStorage",
        "cookie",
        "querystring",
        "sessionStorage",
        "navigator",
        "path",
        "subdomain",
      ],
      caches: ["cookie"],
    },
    debug: false, // remove console 
  });
export default i18n;