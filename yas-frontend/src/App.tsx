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
import LocalizationContext from './LocalizationContext';
import Localized from './l10n/Localized';

type AppProps = {}
type AppState = {
  user: {
    name: string;
  };
  version: string;
  language: string;
}

class App extends PureComponent<AppProps, AppState & HasLoading> {

  constructor(props: AppProps) {
    super(props);

    this.state = {
      isLoading: true,
      user: Global.user(),
      version: Global.version(),
      language: Global.language(),
    };
    setTimeout(() => {
      this.setState({isLoading: false});
    }, 1000);
  }

  render() {
    const {user, version, language} = this.state;
    return (
      <LocalizationContext.Provider value={language}>
        <Router>
          <div className="App">
            <header className="App-header">
              <p>
                <Localized l10nKey="app.title"/>
              </p>
              <Clock/>
              <UserInfo user={user}/>
              <VersionDisplay version={version}/>
              </header>
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
          </div>
        </Router>
      </LocalizationContext.Provider>
    );
  }
}

export default withLoadingC(App);
