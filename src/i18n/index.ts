import spanish from './es.json';
import english from './en.json';
// @ts-ignore
import Spain from '@components/astro/flags/Spain.astro';
// @ts-ignore
import UnitedStates from '@components/astro/flags/UnitedStates.astro';

export const LANGUAGES = {
    SPANISH: 'es',
    ENGLISH: 'en'
}

export const getI18N = ({currentLocale}: { currentLocale: string }) => {
    if (currentLocale === LANGUAGES.SPANISH) return spanish
    if (currentLocale === LANGUAGES.ENGLISH) return english
    return english;
}

export const flags = {
    es: Spain,
    en: UnitedStates
}
