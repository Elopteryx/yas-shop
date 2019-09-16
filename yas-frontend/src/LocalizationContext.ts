import React from 'react';

export type Language =
    | 'en'
    | 'de';

const LocalizationContext = React.createContext<Language>('en');

export default LocalizationContext;