import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Container} from './components/Grid'
import Main from './pages/Main';
import Requests from './pages/Requests';
import NoMatch from './pages/NoMatch';
import Nav from './components/Nav';

const App = () => (
  <Router>
    <Container >
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/requests" component={Requests} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Router>
);

export default App;