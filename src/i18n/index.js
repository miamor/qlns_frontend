import { englishMessages } from 'admin-on-rest';
import vietnameseMessages from 'aor-language-vietnamese';

import customvietnameseMessages from './vi';
import customEnglishMessages from './en';

export default {
    vi: { ...vietnameseMessages, ...customvietnameseMessages },
    en: { ...englishMessages, ...customEnglishMessages },
};
