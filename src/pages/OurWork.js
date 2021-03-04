import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import athlete from '../img/chriswedding.PNG';
import theracter from '../img/binks.PNG';
import goodtimes from '../img/photoshop.PNG';
//Animations
import {motion} from 'framer-motion';
import {pageAnimation,fade,photoAnim, lineAnim} from "../animation"
const OurWork = () => {
    return(
        <Work exit="exit" variants={pageAnimation} initial="hidden" animate="show" style={{background: "#fff"}}>
            <Movie>
                <motion.h2 variants={fade}>Wedding Photography/Videography</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/the-athlete">
                    <Hide>
                    <motion.img variants={photoAnim} src={athlete} alt="athlete" />
                    </Hide>
                </Link>
            </Movie>
            <Movie>
                <motion.h2 variants={fade}>Binks Butchers</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/the-racer">
                    <Hide>
                    <motion.img variants={photoAnim} src={theracter} alt="the racer" />
                    </Hide>
                </Link>
            </Movie>
            <Movie>
                <motion.h2 variants={fade}>Music Videos</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/good-times">
                    <Hide>
                    <motion.img variants={photoAnim} src={goodtimes} alt="good times" />
                    </Hide>
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
        background: #23d997;
        margin-bottom: 3rem;
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

const Hide = styled.div`
    overflow: hidden;
`;

const Frame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 10%;
    width: 100%;
    height: 100vh;
    background: #fffebf;
    z-index: 2;
`;

export default OurWork;