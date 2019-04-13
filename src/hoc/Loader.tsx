import React, { FunctionComponent, ReactNode } from "react";
import logo from '../logo.svg';

export type HasLoading = {
    isLoading?: boolean;
}

const Loader: FunctionComponent<{}> = () => {
    return (
        <div className="App">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Loading...</p>
        </div>
    )
};

export function withLoadingC<P extends object>(Component: React.ComponentType<P>) {
    const origRender = Component.prototype.render;
    Component.prototype.render = function() {
        if (this.state.isLoading) {
            return <Loader/>;
        } else {
            return origRender.call(this);
        }
    };
    return Component;
}

export function withLoadingF<T extends HasLoading>(func: FunctionComponent<T>) {
    return (props: T & {children?: ReactNode}) => {
        if (props.isLoading) {
            return <Loader/>;
        } else {
            return func(props);
        }
    }
}