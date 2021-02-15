//
//

import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './main.scss';

import BirthdayReminder from './projects-1-2-3/1-a/src/App';
import Tours from './projects-1-2-3/2-b/src/App';

import Reviews from './projects-1-2-3/3-c/src/App';

import Accordion from './projects-4-5-6/4-d/src/App';
import Menu from './projects-4-5-6/5-e/src/App';
import F from './projects-4-5-6/6-f/src/App';

export default function App() {
  return (
    <Router>
      <center>React Projects</center>
      <div className='app__router-container'>
        <div>
          <Link to='/birthday-reminder'>- 1 -</Link>
          <Link to='/tours'>- 2 -</Link>
          <Link to='/reviews'>- 3 -</Link>
        </div>
        <div>
          <Link to='/accordion'>- 4 -</Link>
          <Link to='/menu'>- 5 -</Link>
          <Link to='/f'>- 6 -</Link>
        </div>
        <div>
          <Link to='/accordion'>- 7 -</Link>
          <Link to='/menu'>- 8 -</Link>
          <Link to='/f'>- 9 -</Link>
        </div>
      </div>

      <hr />

      <Switch>
        <Route path='/birthday-reminder'>
          <BirthdayReminder />
        </Route>
        <Route path='/tours'>
          <Tours />
        </Route>
        <Route path='/reviews'>
          <Reviews />
        </Route>
        <Route path='/accordion'>
          <Accordion />
        </Route>
        <Route path='/menu'>
          <Menu />
        </Route>
        <Route path='/f'>
          <F />
        </Route>
      </Switch>
    </Router>
  );
}
