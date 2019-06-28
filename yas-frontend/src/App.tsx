import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Clock from './common/Clock';
import UserInfo from './common/UserInfo';
import VersionDisplay from './common/VersionDisplay';
import {withLoadingC, HasLoading} from './hoc/Loader';
import IndexPage from './common/IndexPage';
import ItemPage from './common/ItemPage';
import LocalizationContext from './LocalizationContext';
import LocalizedText from './l10n/LocalizedText';
import Fetcher from "./utils/Fetcher";
import {User} from "./common/User";
import {Version} from "./common/Version";
import {Language} from "./common/Language";
import BalanceDisplay from "./common/BalanceDisplay";

type AppProps = {};
type AppState =
  {
    isLoading: true,
  } |
  {
    isLoading: false,
    user: User;
    version: Version;
    language: Language;
};

class App extends PureComponent<AppProps, AppState & HasLoading> {

  constructor(props: AppProps) {
    super(props);

    this.state = {
      isLoading: true,
    };
  }

  componentDidMount(): void {
    Promise.all([
      Fetcher.GET<User>('app/v1/user/current'),
      Fetcher.GET<Version>('app/v1/version')
    ]).then(([user, version]) => {
      this.setState({isLoading: false, user, version, language: user.language});
    }).catch(() => {
      this.setState({isLoading: false});
    });
  }

  render() {
    if (this.state.isLoading) {
      return;
    }
    const {user, version, language} = this.state;
    return (
      <LocalizationContext.Provider value={language}>
        <Router>
          <div className="App">
            <header className="App-header">
              <div className="App-header-left">
                <p>
                  <LocalizedText l10nKey="app.title"/>
                </p>
              </div>
              <div className="App-header-right">
                <Clock/>
                <UserInfo user={user}/>
                <VersionDisplay version={version}/>
                <BalanceDisplay user={user}/>
              </div>
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
