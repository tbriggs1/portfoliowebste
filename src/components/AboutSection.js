import React from 'react';
import alex from '../img/Alex.jpg';
import {StyledAbout, Description, Hide, Image} from '../styles.js'
//Framer Motion
import {motion} from 'framer-motion';
import { Frame, Scroll, useCycle } from "framer";
import {titleAnim, fade, photoAnim} from '../animation';
import Wave from './Wave.js';
import {UseScroll} from './UseScroll';

const AboutSection = () => {
    const [element, controls] = UseScroll();
    return(
        <StyledAbout variants={fade} animate={controls} inital="hidden" ref={element}>
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h2 variants={titleAnim}>We Work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2  variants={titleAnim}>your <motion.span 
                            animation={{background: "#85F"}}
                            transition={{duration:1, yoyo: Infinity}}
                            size={150}
                            radius={30}
                            background={"#OCF"}
                        >dreams</motion.span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2  variants={titleAnim}> true.</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>Contact us for any photography or videography ideas that you have. We have professions with amazing skills</motion.p>
                <motion.button variants={fade}>Contact Us</motion.button>
            </Description>
            <Image>
                <motion.img  variants={photoAnim} src={alex} alt="Profile Picture"></motion.img>
            </Image>
            <Wave />
        </StyledAbout>

    )
}




export default AboutSection;