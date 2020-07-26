import React, { Component } from 'react';


class Oops extends Component{
    render(){

        return(
        <div    className="oops">
            <div className="oops-item" > <h2 > Oops! Something went wrong. </h2> </div>
            <div className="oops-item" > <p id="colorblue"> If you#re accessing this site via the Chrome browser, I have to apologise. The site is currently not supported by Chrome. Since England has a fair amount of rainy days once the summer is over, I am sure to fix it in the near future. </p> </div>
            <div className="oops-item" > <p id="colorblue"> Please come back using the Safari, Android Web, Internet Explorer or Firefox. </p> </div>
            <div className="oops-item" > <p id="colorblue"> If you're using one of the listed browsers above and you still see that error message, it is likely that the site has exceed 500 clicks, the maximum limit of the deployed API, that days. </p></div>
            <div className="oops-item" > <p id="colorblue"> That would be fantastic news in a way that the site gets used to a fair amount. If it that should keep on happening, I'll upgrade the package. In the meantime, just come back early tomorrow and make use of the fresh contingent. </p></div>
            
            <div className="oops-item" > <h2 > Have great day and please come back tomorrow or use a different browser! </h2> </div>
        </div>
            );
    }
}

export default Oops;