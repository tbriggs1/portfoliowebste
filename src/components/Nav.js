import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {useLocation} from 'react-router-dom';

const Nav = () => {
    const {pathname} = useLocation();
    return(
        <StyledNav>
            <h1><a className="logo" href="#">Capture</a></h1>
            <ul>
                <li>
                    <Link to="/">1. About Us</Link>
                    <Line transition={{duration: 0.75}} initial={{width:"0%"}} animate={{width: pathname === '/' ? "50%" : "0%"}}></Line>
                </li>
                
                <li>
                    <Link to="/work">2. Our Work</Link>
                    <Line transition={{duration: 0.75}} initial={{width:"0%"}} animate={{width: pathname === '/work' ? "50%" : "0%"}}></Line>
                </li>
                
                <li>
                    <Link to="/contact">3. Contact Us</Link>
                    <Line transition={{duration: 0.75}} initial={{width:"0%"}} animate={{width: pathname === '/contact' ? "50%" : "0%"}}></Line>
                </li>
            </ul>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background: #282828;
    a{
        color: white;
        text-decoration: none;
    }
    ul{
        display: flex;
        list-style: none;
        
    }
    .logo{
        font-size: 1.5rem;
        font-family: "Lobster", cursive;
        font-weight: lighter;
    }
    li{
        padding-left: 10rem;
        position: relative;
        
    }
    @media (max-width: 1300px){
        flex-direction: column;
        padding: 2rem 1rem;
        #Logo{
            display:inline-block;
            margin:2rem;
        }
        ul{
            justify-content: space-around;
            padding: 2rem;
            width: 100%;
        }
        li{
            padding-right: 0.4rem;

        }
    }
`;

const Line = styled(motion.div)`
    height: 0.3rem;
    background: #23d997;
    width: 0%;
    position: absolute;
    bottom: -80%;
    left: 60%;
`

export default Nav;