import React from 'react';
import AboutSection from './components/AboutSection';
import AboutUs from './pages/AboutUs';
import GlobalStyle from './components/GlobalFile'
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import Nav from './components/Nav';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/work" exact>
          <OurWork />
        </Route>
        <Route path="/contact" exact>
          <ContactUs />
        </Route>
      </Switch>
    </>
  );
}

export default App;
