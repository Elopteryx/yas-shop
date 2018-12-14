import * as React from 'react';
import { withRouter, RouteComponentProps } from "react-router";
import { NavLink } from 'react-router-dom';

type MenuItemProps = {
    name: string;
} & RouteComponentProps<{}>;

const MenuItem: React.FunctionComponent<MenuItemProps> = (props) => {
    const {name} = props;

    return (
        <div className="MenuItem">
            <NavLink to={"/items/" + name.toLowerCase()} className="App-link" activeClassName="App-link-active">{name}</NavLink>
        </div>
    );
};

export default withRouter(React.memo(MenuItem));