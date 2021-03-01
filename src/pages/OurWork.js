import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import athlete from '../img/chriswedding.PNG';
import theracter from '../img/binks.PNG';
import goodtimes from '../img/photoshop.PNG';
//Animations
import {motion} from 'framer-motion';
import {pageAnimation} from "../animation"
const OurWork = () => {
    return(
        <Work exit="exit" variants={pageAnimation} initial="hidden" animate="show" style={{background: "#fff"}}>
            <Movie>
                <h2>Wedding Photography/Videography</h2>
                <div className="line"></div>
                <Link to="/work/the-athlete">
                    <img src={athlete} alt="athlete" />
                </Link>
            </Movie>
            <Movie>
                <h2>Binks Butchers</h2>
                <div className="line"></div>
                <Link to="/work/the-racer">
                    <img src={theracter} alt="the racer" />
                </Link>
            </Movie>
            <Movie>
                <h2>Music Videos</h2>
                <div className="line"></div>
                <Link to="/work/good-times">
                    <img src={goodtimes} alt="good times" />
                </Link>
            </Movie>
        </Work>
    );
};


const Work = styled(motion.div)`
    color: #23d997;
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;

    h2{
        padding: 1rem 0rem;
    }
`;
const Movie = styled.div`
    padding-bottom: 10rem;
    .line{
        height: 0.5rem;
        background: #cccccc;
        margin-bottom: 3rem;
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

export default OurWork;