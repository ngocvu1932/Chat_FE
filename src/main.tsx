import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './pages/App.tsx';
import './main.css';
import {Provider} from 'react-redux';
import store from './redux/store.ts';
import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import {appConfig} from './appConfig.ts';
import enLocale from './locales/locale_en.json';
import viLocale from './locales/locale_vi.json';

if (!localStorage.getItem('appConfig')) {
  localStorage.setItem('appConfig', JSON.stringify(appConfig));
}

const lang = JSON.parse(localStorage.getItem('appConfig') ?? '{}').defaultLanguage ?? 'vi';

i18next
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enLocale,
      },
      vi: {
        translation: viLocale,
      },
    },
    lng: lang,
    fallbackLng: 'vi',
    interpolation: {
      escapeValue: false,
    },
  })
  .then();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
