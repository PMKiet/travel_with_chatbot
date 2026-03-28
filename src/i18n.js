import { initReactI18next } from 'react-i18next'
import i18next from 'i18next'

//from locales
import test1 from '@/locales/en/test.json'
import test2 from '@/locales/vi/test.json'

const resources =  {
    en: {translation: test1},
    vi: {translation: test2}
}

export default i18next
    .use(initReactI18next)
    .init({
        resources,
        lng: 'vi',
        fallbackLng: "en",
    })