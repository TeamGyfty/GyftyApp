import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Container} from './components/Grid'
import SigninPage from './pages/SigninPage';
import Main from './pages/Main';
import Requests from './pages/Requests';
import NoMatch from './pages/NoMatch';
import SelectedRequest from "./pages/SelectedRequest";
import Nav from './components/Nav';

const App = () => (
  <Router>
    <Container >
      <Nav />
      <Switch>
        <Route exact path="/" component={SigninPage} />
        <Route exact path="/home" component={Main} />
        <Route exact path="/requests" component={Requests} />
        <Route path="/requests/detailed/" component={SelectedRequest} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Router>
);

export default App;