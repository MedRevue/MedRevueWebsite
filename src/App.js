import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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

function JoinRedirect() {
  window.location.replace('https://docs.google.com/forms/d/e/1FAIpQLScNVblxGNk8792z9hLWCOLlBSThnuwXb5g5UfKMnNYvdxLjDQ/viewform');
  return <div />;
}

function App() {
  return (
    <>
      <Router>
        <Menu />
        <Routes>
          <Route path='past-shows' element={<PastShows />} />
          <Route path='teams' element={<Teams />} />
          <Route path='sponsors'element={<Sponsors />} />
          <Route path='faq' element={<FAQ />} />
          <Route path='about-us' element={<AboutUs />} />
          <Route path='join' element={<JoinRedirect />} />
          <Route path='/' element={<>
            <Video />
            <Landing />
          </>} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
