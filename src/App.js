import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Video from './components/Video';
import Menu from './components/Menu';

// Contents
import Landing from './components/Content/Landing';
import AboutUs from './components/Content/AboutUs';
import Teams from './components/Content/Teams';
import Sponsors from './components/Content/Sponsors';
import FAQ from './components/Content/FAQ';
import PastShows from './components/Content/PastShows';

import Footer from './components/Footer';

import './App.scss';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Menu />
        <Switch>
          <Route path='/past-shows'><PastShows /></Route>
          <Route path='/teams'><Teams /></Route>
          <Route path='/sponsors'><Sponsors /></Route>
          <Route path='/faq'><FAQ /></Route>
          <Route path='/about-us'><AboutUs /></Route>
          <Route path='/join'
              render={() => { window.location.replace('https://forms.gle/agjKVwL3fBjwoT2T7'); }} />
          <Route path='/'>
            <Video />
            <Landing />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </React.Fragment>
  );
}

export default App;
