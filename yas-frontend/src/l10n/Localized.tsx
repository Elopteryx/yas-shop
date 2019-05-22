import * as React from 'react';
import enData from './data/en.json';
import deData from './data/de.json';
import LocalizationContext from '../LocalizationContext';

type LocalizedProps = {
    l10nKey: string;
};

const Localized: React.FunctionComponent<LocalizedProps> = (props) => {
    return (
        <LocalizationContext.Consumer>
          {(language) => {
            const {l10nKey} = props;
            let value;
            switch (language) {
                case 'de':
                    value = (deData as any)[l10nKey];
                    break;
                case 'en':
                default:
                    value = (enData as any)[l10nKey];
                    break;
            }

            value = value || 'N/A';

            return (
                <span>{value}</span>
            );
          }
        }
        </LocalizationContext.Consumer>
      );
};

export default React.memo(Localized);