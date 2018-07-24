import React from 'react';
import {NavLink} from 'react-router-dom';

const Portfolio = () => (
    <div>
         Welcome to my portfolio page
        <NavLink to="/portfolio/1">Oneitem</NavLink>
        <NavLink to="/portfolio/2" >Item2</NavLink>
        
    </div>
);
export default Portfolio; 