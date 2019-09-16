import * as React from 'react';
import './BalanceDisplay.css';
import {useContext} from "react";
import UserContext from "../UserContext";

type BalanceDisplayProps = {};

const BalanceDisplay: React.FunctionComponent<BalanceDisplayProps> = () => {
    const user = useContext(UserContext);

    return (
        <div className="BalanceDisplay">Balance: {user.balance}</div>
    );
};

export default React.memo(BalanceDisplay);