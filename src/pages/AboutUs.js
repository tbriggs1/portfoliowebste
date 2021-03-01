import React from 'react';
import AboutSection from '../components/AboutSection';
import FaqSection from '../components/FaqSection';
import ServicesSection from '../components/ServicesSection';
import Nav from '../components/Nav';
//Styled
import styled from 'styled-components';
//Animations
import {motion} from 'framer-motion';
import {pageAnimation} from "../animation"

const AboutUs = () =>
{
    return(
        <motion.div exit="exit" variants={pageAnimation} initial='hidden' animate='show'>
            <AboutSection />
            <ServicesSection />
            <FaqSection />
        </motion.div>
    )
}

export default AboutUs;