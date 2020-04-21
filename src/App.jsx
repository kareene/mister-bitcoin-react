import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import MainHeader from './components/MainHeader';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import ContactPage from './pages/ContactPage';
import ContactDetailsPage from './pages/ContactDetailsPage';
import ContactEditPage from './pages/ContactEditPage';
import StatisticPage from './pages/StatisticPage';

const history = createBrowserHistory();

function App() {
  return (
    <div className="AppLayout">
      <Router history={history}>
        <MainHeader />
        <main className="ContentContainer">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/signup" component={SignupPage} />
            <Route path="/contact" exact component={ContactPage} />
            <Route path="/contact/edit/:id?" component={ContactEditPage} />
            <Route path="/contact/:id" component={ContactDetailsPage} />
            <Route path="/statistic" component={StatisticPage} />
          </Switch>
        </main>
      </Router>
      <footer>
        <small>Copyright © 2020 Kareene Komet</small>
      </footer>
    </div>
  );
}

export default App;
