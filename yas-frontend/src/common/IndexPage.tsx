import * as React from 'react';
import MenuBar from '../menu/MenuBar';

type IndexPageProps = {};

const IndexPage: React.FunctionComponent<IndexPageProps> = () => {
    return (
        <div className="Page">
            <MenuBar/>
            <div className="Content">
                This is the index page.
            </div>
        </div>
    );
};

export default React.memo(IndexPage);