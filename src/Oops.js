import React, { Component } from 'react';


class Oops extends Component{
    render(){

        return(
        <div    style={{
                margin: '25px 0px 20px 20px',
                textalign: 'center',
                horizontalalign: 'center',
                verticalalign: 'middle',

                }}
        >
                
            <h1> Oops! Something went wrong. </h1>
            <p> The most likely cause it that the daily amount of free news request on NewsAPI have been exceeded (500 per day) </p>
            <p> In a way that is great news in it self since it means the site is frequently used!! </p>
            <p> If this keeps happinnig the hosting package will be potentially upgraded </p>
            
            <h1> Have great day and please come back tomorrow! </h1>
            
        </div>
            );
    }
}

export default Oops;