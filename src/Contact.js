import React, { Component } from 'react';


class Contact extends Component{
    render(){
        return(
        <div className ="contact">
            <h1>
                This is the gateway to start a conversation!
            </h1>
            <br></br>
            <p>
                Are you interested to send any feedback or talk about the project in more detail?
            </p>
            <p>
                I would be delighted to hear if NewsNobodyReads.com has gained your attention and what thoughts it has triggered. 
            </p>
            <div className="email">
            <p> <u> Please reach out under: newsnobodyreads@outlook.de </u></p>
            </div>
              <p>
                I am looking forward to hearing from you!
            </p> 
            <br></br>
            <p>
                Best, <br></br> <strong> Julian </strong> 
            </p>
        </div>
            );
    }
}

export default Contact;