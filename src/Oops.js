import React, { Component } from 'react';


class Oops extends Component{
    render(){

        return(
        <div    className="oops">
            <div className="oops-item" > <h2 > Oops! Something went wrong. </h2> </div>
            <div className="oops-item" > <p2 > The most likely cause therefore is that the daily amount of free news request on NewsAPI have been exceeded (500 per day). </p2> </div>
            <div className="oops-item" > <p2 > In a way that is great news in it self, since it means the site is frequently used!! </p2> </div>
            <div className="oops-item" > <p2 > If this keeps happinnig I update the hosting package to allow for more traffic. </p2></div>
            
            <div className="oops-item" > <h2 > Have great day and please come back tomorrow! </h2> </div>
        </div>
            );
    }
}

export default Oops;