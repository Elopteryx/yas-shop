import React from 'react';

export type Version = {
    value: string;
    major: number;
    minor: number;
    patch: number;
};

const VersionContext = React.createContext<Version>({
    value: '1.0.0',
    major: 1,
    minor: 0,
    patch: 0,
});

export default VersionContext;