import React from "react";
import {NavLink, useLocation} from "react-router-dom";
import LocalizedText from "./l10n/LocalizedText";

const resolveTitle = (path: string) => {
    switch (path) {
        case "/items/motherboard":
            return " / Motherboard";
        case "/items/processor":
            return " / Processor";
        case "/items/videocard":
            return " / Videocard";
        case "/items/monitor":
            return " / Monitor";
        case "/items/notebook":
            return " / Notebook";
        case "/items/television":
            return " / Television";
        case "/items/console":
            return " / Console";
        case "/items/ssd":
            return " / SSD";
        case "/items/other":
            return " / Other";
        default:
            return "";
    }
};

const AppTitle: React.FunctionComponent<{}> = () => {
    const {pathname} = useLocation();
    return (
        <div className="App-header-left">
            <NavLink to="/" className="App-header-left-link">
                <LocalizedText l10nKey="app.title"/>{resolveTitle(pathname)}
            </NavLink>
        </div>
    );
};

export default AppTitle;