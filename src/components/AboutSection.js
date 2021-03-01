import React from 'react';
import alex from '../img/Alex.jpg';
import {StyledAbout, Description, Hide, Image} from '../styles.js'
//Framer Motion
import {motion} from 'framer-motion';


const AboutSection = () => {
    return(
        <StyledAbout>
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h2 >We Work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 >your <motion.span 
                            animation={{background: "#85F"}}
                            transition={{duration:1, yoyo: Infinity}}
                            size={150}
                            radius={30}
                            background={"#OCF"}
                        >dreams</motion.span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 > true.</motion.h2>
                    </Hide>
                </motion.div>
                <p>Contact us for any photography or videography ideas that you have. We have professions with amazing skills</p>
                <button>Contact Us</button>
            </Description>
            <Image>
                <img src={alex} alt="Profile Picture"></img>
            </Image>
        </StyledAbout>

    )
}




export default AboutSection;