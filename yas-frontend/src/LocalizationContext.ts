import React from 'react';
import {Language} from "./common/Language";

const LocalizationContext = React.createContext('en' as Language);

export default LocalizationContext;