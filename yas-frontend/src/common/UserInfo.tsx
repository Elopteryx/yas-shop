import * as React from 'react';
import './UserInfo.css';

type UserInfoProps = {
    user: {
        name: string;
    }
}

const UserInfo: React.FunctionComponent<UserInfoProps> = (props) => {
    const {user} = props;

    return (
        <div className="UserInfo">Logged in: {user.name}</div>
    )
};

export default React.memo(UserInfo);