import * as React from 'react';
import './VersionDisplay.css';

type VersionDisplayProps = {
    version: string;
}

const VersionDisplay: React.FunctionComponent<VersionDisplayProps> = (props) => {
    const {version} = props;

    return (
        <div className="VersionDisplay">Version: {version}</div>
    );
};

export default React.memo(VersionDisplay);