import * as React from 'react';
import './VersionDisplay.css';
import {Version} from "./Version";

type VersionDisplayProps = {
    version: Version;
}

const VersionDisplay: React.FunctionComponent<VersionDisplayProps> = (props) => {
    const {version} = props;

    return (
        <div className="VersionDisplay">Version: {version.value}</div>
    );
};

export default React.memo(VersionDisplay);