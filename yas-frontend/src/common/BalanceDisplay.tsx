import * as React from 'react';
import './BalanceDisplay.css';
import {User} from "./User";

type BalanceDisplayProps = {
    user: User;
}

const BalanceDisplay: React.FunctionComponent<BalanceDisplayProps> = (props) => {
    const {user} = props;

    return (
        <div className="BalanceDisplay">Balance: {user.balance}</div>
    );
};

export default React.memo(BalanceDisplay);