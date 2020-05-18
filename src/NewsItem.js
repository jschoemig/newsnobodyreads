import React from 'react';

const NewsItem = ({title, source, url}) => (
    <li>
        <span>
        <a href={url} target="_blank" class="NewItem">   
            {title} ({source.name}) 
        </a>
        </span>
    </li>
);

export default NewsItem;