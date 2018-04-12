import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch, History} from 'react-router-dom';
import $ from 'jquery';
import LandingPage from './components/LandingPageView.jsx';
import RegistrationPage from './components/RegistrationPageView.jsx';
import StudentHomepage from './components/StudentHomepageView.jsx';
import StudentVideo from './components/StudentVideoView.jsx';
import OwnerHomepage from './components/OwnerHomepageView.jsx';
import OwnerVideo from './components/OwnerVideoView.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <Router>
          <Switch>
            <LandingPage exact path="/" component={LandingPage}/>
            <RegistrationPage exact path="/registration" component={RegistrationPage}/>
            <StudentHomepage exact path="/student" component={StudentHomepage}/>
            <StudentVideo exact path="/student/video" component={StudentVideo}/>
            <OwnerHomepage exact path="/owner" component={OwnerHomepage}/>
            <OwnerVideo exact path="/owner/video" component={OwnerVideo}/>
          </Switch>
        </Router>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));