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
                        <motion.h2 variants={titleAnim}>Alex Harrison - </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2  variants={titleAnim}><motion.span 
                            animation={{background: "#85F"}}
                            transition={{duration:1, yoyo: Infinity}}
                            size={150}
                            radius={30}
                            background={"#OCF"}
                        >Photographer</motion.span> and <motion.span 
                        animation={{background: "#85F"}}
                        transition={{duration:1, yoyo: Infinity}}
                        size={150}
                        radius={30}
                        background={"#OCF"}
                    >Videographer</motion.span></motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2  variants={titleAnim}></motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>With years of experience, I'm still continuing to sharpen my skills... feel free to contact me for any projects or idea you may have!</motion.p>
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