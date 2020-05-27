import React, { Component } from 'react';
import { NavLink } from "react-router-dom";


class Footer extends Component{
    render(){
        const active = {textDecoration: 'none', color: 'grey'};
            
        return(
        <div className="footer">
            <nav>
                <li><NavLink to="/about" activestlye={active}>about</NavLink></li>
                <li><NavLink to="/technical" activestyle={active}>technical</NavLink></li>
                <li><NavLink to="/contact" activestyle={active}>contact</NavLink></li>
            </nav>
        </div>
            )
    }
};

export default Footer;