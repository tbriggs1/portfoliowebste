import React from 'react';
import styled from 'styled-components';
import {StyledAbout, Description, Hide, Image} from '../styles.js';
import AboutSection from './AboutSection.js';


const FaqSection = () => {
    return(
        <FAQ>
            <h2>Any Questions <span>FAQ</span></h2>
            <div className="question">
                <h4>How do I start?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>
                        Great question! I think that's one of the fundamental and most import things that we look for when developing such components.
                    </p>
                </div>
            </div>
            <div className="faq-line"></div>
            <div className="question">
                <h4>Daily Schedule?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>
                        Great question! I think that's one of the fundamental and most import things that we look for when developing such components.
                    </p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Different Payment Methods</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>
                        Great question! I think that's one of the fundamental and most import things that we look for when developing such components.
                    </p>
                </div>
            </div>
            <div className="faq-line"></div>
            <div className="question">
                <h4>What products do you offer?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>
                        Great question! I think that's one of the fundamental and most import things that we look for when developing such components.
                    </p>
                </div>
            </div>
            <div className="faq-line"></div>
        </FAQ>
    )
}

const FAQ = styled(StyledAbout)`
display:block;
span{
    display:block;
}
h2{
    padding-bottom: 2rem;
    font-weight: lighter;
}
.faq-line{
    margin: 2rem 0rem;
    width: 100%;
    background: #cccccc;
    height: 0.2rem;
}
.question{
    padding: 3rem 0rem;
    cursor: pointer;
}
.answer{
    padding: 2rem 0rem;
    p{
        padding: 1rem 0rem;
    }
}
`

export default FaqSection;