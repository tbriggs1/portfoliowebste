import React from 'react';
import home1 from '../img/home1.png';
import {StyledAbout, Description, Hide, Image} from '../styles.js'

const AboutSection = () => {
    return(
        <StyledAbout>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>We Work to make</h2>
                    </Hide>
                    <Hide>
                        <h2>your <span>dreams</span> come</h2>
                    </Hide>
                    <Hide>
                        <h2> true.</h2>
                    </Hide>
                </div>
                <p>Contact us for any photography or videography ideas that you have. We have professions with amazing skills</p>
                <button>Contact Us</button>
            </Description>
            <Image>
                <img src={home1} alt="Profile Picture"></img>
            </Image>
        </StyledAbout>

    )
}




export default AboutSection;