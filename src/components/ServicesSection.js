import React from 'react';
import wedding from '../img/rings-wedding.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import alex2 from '../img/Alex2.jpg';
import {StyledAbout, ServiceDescription, Hide, ServiceImage} from '../styles.js'
import styled from 'styled-components';
import {UseScroll} from './UseScroll';
import {fade} from '../animation';
import { faRingsWedding as faRings } from '@fortawesome/pro-regular-svg-icons'
import { faUserTie, faHashtag, faAd} from '@fortawesome/pro-regular-svg-icons'
import { FontAwesomeIcon,  } from '@fortawesome/react-fontawesome';
import '../styles.css'


const ServicesSection = () => {
    const [element, controls] = UseScroll();
    return(
        <Services variants={fade} animate={controls} initial="hidden" ref={element}>
            <ServiceImage>
                <img alt="home" src={alex2}/>
            </ServiceImage>
            <ServiceDescription>
                <h2>With <span>specialization</span> in</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <FontAwesomeIcon className="fontAwesomeIcon" icon={faRings} size="3x" />
                            <h3>Weddings</h3>
                        </div>
                        <p>I offer services in wedding Photography and Videography.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <FontAwesomeIcon className="fontAwesomeIcon" icon={faUserTie} size="3x" />
                            <h3>Businesses</h3>
                        </div>
                        <p>Want to promote your business with a new video?</p>
                    </Card>
                   <Card>
                        <div className="icon">
                            <FontAwesomeIcon  className="fontAwesomeIcon" icon={faAd} size="3x" />
                            <h3>Promotional</h3>
                        </div>
                        <p>Do you need pictures or a video to launch a new product?</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <FontAwesomeIcon  className="fontAwesomeIcon" icon={faHashtag} size="3x" />
                            <h3>Social Media</h3>
                        </div>
                        <p>Need custom formats and images for social media content?</p>
                    </Card>
                </Cards>
            </ServiceDescription>
        </Services>
    )
}

const Services = styled(StyledAbout)`
    h2{
        padding-bottom: 5rem;
    }
    p{
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }  
`;

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 1300px){
        justify-content: center;
    }
`;

const Card = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    flex-basis: 20rem;
    margin-right: 1rem;
    background: white;
    margin-bottom: 1rem;
    padding: 1rem;
    padding-top: 3rem;
    .icon {
        display:flex;
        align-items: center;
        h3{
            margin-left: 1rem;
            background: white;
            color: black;
            padding: 1rem;
        }
    }
    img{
        fill: white;
    }
    @media (max-width: 1300px){

    }
`

export default ServicesSection;