import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Clock from './common/Clock';
import UserInfo from './common/UserInfo';
import VersionDisplay from './common/VersionDisplay';
import {HasLoading, withLoading} from './hoc/Loader';
import IndexPage from './common/IndexPage';
import ItemPage from './common/ItemPage';
import LocalizationContext, {Language} from './LocalizationContext';
import LocalizedText from './l10n/LocalizedText';
import Fetcher from "./utils/Fetcher";
import BalanceDisplay from "./common/BalanceDisplay";
import UserContext, {User} from "./UserContext";
import VersionContext, {Version} from "./VersionContext";

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

const App: React.FunctionComponent<AppState & HasLoading> = () => {
  const [state, setState] = useState({isLoading: true} as AppState);
  useEffect(() => {
    Promise.all([
      Fetcher.GET<User>('/app/v1/user/current'),
      Fetcher.GET<Version>('/app/v1/version')
    ]).then(([user, version]) => {
      setState({isLoading: false, user, version, language: user.language});
    }).catch(() => {
      setState({isLoading: true});
    });
  }, []);
  if (state.isLoading) {
    return null;
  }
  const {user, version, language} = state;
  return (
      <VersionContext.Provider value={version}>
        <UserContext.Provider value={user}>
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
                    <UserInfo/>
                    <VersionDisplay/>
                    <BalanceDisplay/>
                    <Clock/>
                  </div>
                </header>
                <Route path="/" exact component={() => <IndexPage/>}/>
                <Route path="/items/motherboard" component={() => <ItemPage/>}/>
                <Route path="/items/processor" component={() => <ItemPage/>}/>
                <Route path="/items/videocard" component={() => <ItemPage/>}/>
                <Route path="/items/monitor" component={() => <ItemPage/>}/>
                <Route path="/items/notebook" component={() => <ItemPage/>}/>
                <Route path="/items/television" component={() => <ItemPage/>}/>
                <Route path="/items/console" component={() => <ItemPage/>}/>
                <Route path="/items/ssd" component={() => <ItemPage/>}/>
                <Route path="/items/other" component={() => <ItemPage/>}/>
              </div>
            </Router>
          </LocalizationContext.Provider>
        </UserContext.Provider>
      </VersionContext.Provider>
  );
};

export default withLoading(App);
