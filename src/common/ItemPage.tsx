import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import MenuBar from '../menu/MenuBar';

type ItemPageProps = {} & RouteComponentProps<{}>;

const ItemPage: React.FunctionComponent<ItemPageProps> = (props) => {
    const {match} = props;
    return (
        <div>
            <MenuBar/>
            <div>This is the {match!.path.replace('/items/', '')} page.</div>
        </div>
    );
};

export default withRouter(React.memo(ItemPage));