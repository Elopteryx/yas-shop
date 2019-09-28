import * as React from 'react';
import {useLocation} from 'react-router';
import MenuBar from '../menu/MenuBar';

type ItemPageProps = {};

const ItemPage: React.FunctionComponent<ItemPageProps> = () => {
    const location = useLocation();
    return (
        <div className="Page">
            <MenuBar/>
            <div className="Content">
                This is the {location.pathname.replace('/items/', '')} page.
            </div>
        </div>
    );
};

export default React.memo(ItemPage);