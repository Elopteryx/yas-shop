import * as React from 'react';
import MenuBar from '../menu/MenuBar';

type IndexPageProps = {};

const IndexPage: React.FunctionComponent<IndexPageProps> = (props) => {
    return (
        <div>
            <MenuBar/>
            <div>This is the index page.</div>
        </div>
    );
};

export default React.memo(IndexPage);