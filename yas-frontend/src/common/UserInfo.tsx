import * as React from 'react';
import './UserInfo.css';
import {useContext} from "react";
import UserContext from "../UserContext";

type UserInfoProps = {};

const UserInfo: React.FunctionComponent<UserInfoProps> = () => {
    const user = useContext(UserContext);

    return (
        <div className="UserInfo">Logged in: {user.name}</div>
    )
};

export default React.memo(UserInfo);