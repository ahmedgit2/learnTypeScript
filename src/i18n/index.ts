import I18n from 'react-native-i18n';
import en from './en';
import ar from './ar';
import {Lang} from '../utils';

export const availableLanguages = {
  ar,
  en,
};

export const langConfig = (lang: Lang) => {
  // set default lang
  let defaultLang = lang;

  // converting i18n format from [en-us] to 'en'
  let currentLang = I18n.currentLocale()?.split('-')[0].toString();

  // check if current language exist in my languages - if not make it 'ar'
  if (!availableLanguages[currentLang as Lang]) {
    currentLang = Lang.ar;
  }
  //add my my languages to i18n translations
  I18n.translations = availableLanguages;

  // set i18n local and default locale languages
  I18n.locale = defaultLang || lang || currentLang;
  I18n.defaultLocale = I18n.locale;

  return I18n.locale;
};
