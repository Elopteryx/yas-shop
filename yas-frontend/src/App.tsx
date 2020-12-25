import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Clock from './common/Clock';
import UserInfo from './common/UserInfo';
import VersionDisplay from './common/VersionDisplay';
import {withLoading} from './hoc/Loader';
import IndexPage from './common/IndexPage';
import ItemPage from './common/ItemPage';
import LocalizationContext, {Language} from './LocalizationContext';
import Fetcher from "./utils/Fetcher";
import BalanceDisplay from "./common/BalanceDisplay";
import UserContext, {User} from "./UserContext";
import VersionContext, {Version} from "./VersionContext";
import {Immutable} from "./utils/Types";
import AppTitle from "./AppTitle";
import SearchBar from "./search/SearchBar";

type AppState = Immutable<
  {
    isLoading: true,
  } |
  {
    isLoading: false,
    user: User;
    version: Version;
    language: Language;
}>;

const App: React.FunctionComponent<{}> = () => {
  const [state, setState] = useState<AppState>({isLoading: true});
  useEffect(() => {
    Promise.all([
      Fetcher.GET<User>('/app/v1/user'),
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
                  <AppTitle/>
                  <SearchBar/>
                  <div className="App-header-right">
                    <UserInfo/>
                    <VersionDisplay/>
                    <BalanceDisplay/>
                    <Clock/>
                  </div>
                </header>
                <Route path="/" exact><IndexPage/></Route>
                <Route path="/items/motherboard"><ItemPage/></Route>
                <Route path="/items/processor"><ItemPage/></Route>
                <Route path="/items/videocard"><ItemPage/></Route>
                <Route path="/items/monitor"><ItemPage/></Route>
                <Route path="/items/notebook"><ItemPage/></Route>
                <Route path="/items/television"><ItemPage/></Route>
                <Route path="/items/console"><ItemPage/></Route>
                <Route path="/items/ssd"><ItemPage/></Route>
                <Route path="/items/other"><ItemPage/></Route>
              </div>
            </Router>
          </LocalizationContext.Provider>
        </UserContext.Provider>
      </VersionContext.Provider>
  );
};

export default withLoading(App);
