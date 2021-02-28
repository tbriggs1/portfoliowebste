import React from 'react';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import AboutUs from './pages/AboutUs';
import GlobalStyle from './components/GlobalFile'

function App() {
  return (
    <>
      <GlobalStyle />
      <AboutUs />
      <ServicesSection />
    </>
  );
}

export default App;
