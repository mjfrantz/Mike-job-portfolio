import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch }
  from 'react-router-dom';
import { Home } from './Home';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route component={NotFound} /> */}
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
