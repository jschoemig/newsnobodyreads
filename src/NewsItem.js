import React from 'react';
import { NavLink } from "react-router-dom";

const NewsItem = ({title, source, url}) => (
    <div className="newsitem">
        <li>
            <a href={url} target="_blank" rel="noopener noreferrer" className="newsitem-news"> {title} </a>
            <NavLink to="/" className="newsitem-source"> ({source.name}) </NavLink>
        </li>
    </div>
);

export default NewsItem;