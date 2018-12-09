import * as React from 'react';

type MenuItemProps = {
    name: string;
}

const MenuItem: React.FunctionComponent<MenuItemProps> = (props) => {
    const {name} = props;

    return (
        <div className="MenuItem">
            <a className="App-link">{name}</a>
        </div>
    );
};

export default React.memo(MenuItem);