import React from 'react';
import AboutSection from '../components/AboutSection';
import FaqSection from '../components/FaqSection';
import ServicesSection from '../components/ServicesSection';
import Nav from '../components/Nav';
//Styled
import styled from 'styled-components';

const AboutUs = () =>
{
    return(
        <div>
            <AboutSection />
            <ServicesSection />
            <FaqSection />
        </div>
    )
}

export default AboutUs;