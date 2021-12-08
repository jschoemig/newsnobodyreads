import React, { Component } from 'react';


class Oops extends Component{
    render(){

        return(
        <div    className="oops">
            <div className="oops-item" > <h2 > Oops! Something went wrong. </h2> </div>
            <div className="oops-item" > <p id="colorblue"> If you are accessing this site via the Chrome browser, I have to apologise. </p> </div>
            <div className="oops-item" > <p id="colorblue"> Please come back using the Safari, Android Web, Internet Explorer or Firefox. </p> </div>
            <div className="oops-item" > <p id="colorblue"> If you're using one of the listed browsers above and you still see that error message, it is likely that either there is an unrekognized error. In this case I aim to fix to this as soon as possible. </p></div>
            <div className="oops-item" > <p id="colorblue"> If there is no unrekognized error and the site still does not load, that means NewsNobodyReads.com has exceeded its 500 daily clicks which the current News Api subscription allows. </p></div>
            
            <div className="oops-item" > <h2 > In summary, please use a different browser or come back tomorrow! Have a great day! </h2> </div>
        </div>
            );
    }
}

export default Oops;