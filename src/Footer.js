import React, { Component } from 'react';
import { NavLink } from "react-router-dom";


class Footer extends Component{
    render(){

        return(
        <div className="footer">
            <nav>
                <li><NavLink to="/about" >about</NavLink></li>
                <li><NavLink to="/technical" >technical</NavLink></li>
                <li><NavLink to="/contact" >contact</NavLink></li>
            </nav>
        </div>
            );
    }
}

export default Footer;