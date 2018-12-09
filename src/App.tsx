import React, { PureComponent } from 'react';
import './App.css';
import Clock from './common/Clock';
import UserInfo from './common/UserInfo';
import VersionDisplay from './common/VersionDisplay';
import {withLoadingC, HasLoading} from './hoc/Loader';
import Global from './Global';
import MenuBar from './menu/MenuBar';

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
      <div className="App">
        <header className="App-header">
          <p>
            YAS Shop
          </p>
          <MenuBar/>
          <Clock/>
          <UserInfo user={user}/>
          <VersionDisplay version={version}/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default withLoadingC(App);
