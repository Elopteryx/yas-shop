import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Clock from './common/Clock';
import UserInfo from './common/UserInfo';
import VersionDisplay from './common/VersionDisplay';
import {withLoadingC, HasLoading} from './hoc/Loader';
import Global from './Global';
import MenuBar from './menu/MenuBar';
import IndexPage from './common/IndexPage';
import ItemPage from './common/ItemPage';

type AppProps = {}
type AppState = {
  user: {
    name: string;
  };
  version: string;
}

class App extends PureComponent<AppProps, AppState & HasLoading> {

  constructor(props: AppProps) {
    super(props);

    this.state = {
      isLoading: true,
      user: Global.user(),
      version: Global.version(),
    };
    setTimeout(() => {
      this.setState({isLoading: false});
    }, 1500);
  }

  render() {
    const {user, version} = this.state;
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <p>
              YAS Shop
            </p>
            <Clock/>
            <UserInfo user={user}/>
            <VersionDisplay version={version}/>
          <Route path="/" exact component={() => <IndexPage/>} />
          <Route path="/items/motherboard" component={() => <ItemPage/>} />
          <Route path="/items/processor" component={() => <ItemPage/>} />
          <Route path="/items/videocard" component={() => <ItemPage/>} />
          <Route path="/items/monitor" component={() => <ItemPage/>} />
          <Route path="/items/notebook" component={() => <ItemPage/>} />
          <Route path="/items/television" component={() => <ItemPage/>} />
          <Route path="/items/console" component={() => <ItemPage/>} />
          <Route path="/items/ssd" component={() => <ItemPage/>} />
          <Route path="/items/other" component={() => <ItemPage/>} />
          </header>
        </div>
      </Router>
    );
  }
}

export default withLoadingC(App);
