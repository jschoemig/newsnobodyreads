import React, {Component} from 'react';
import aws from './pictures/aws.png';
import newsapi from './pictures/newsapi.png';
import reactjs from './pictures/reactjs.jpg';
import github from './pictures/github.png';
import cloud9 from './pictures/cloud9.png';
import css3 from './pictures/css3.png';
import html5 from './pictures/html5.png';




class Technical extends Component {
    
    render(){
        return(
            <div className ="technical">
                <h1>
                    This is how the project was technically realised!
                </h1>
                <br></br>
                <p>
                    This webpage is the product of a personal learning expierence. 
                    After having gained interest in full stack development, I learnt the foundations from the Udemy Web Developer Course. 
                    So, what you see here is the outcome of early stage knowledge in HTML, CSS, JS, React and AWS cloud services. 
                    I am sure this site can be significantly enhanced from a technical point of view and I am sure that I will do so with every new piece I learn.
                    Please find underneath an as good as I can description of the deployed frameworks and systems.
                </p>
                <p>
                    React was used to build the user interface and connection and integration of the external API databases.
                    The framework was developed by Facebook and is currently widely used for both web as well as mobile web application development. 
                    It requires a good understanding of the Java Script (JS) language but has on top own syntaxes and rules.
                    One key feature of React is the creation of so called single-page apps, which this website is as well. 
                    With implemented states for the main components React allows you to render your new request on your machine instead of sending a request to an external server. 
                    The Routes library has been used to accomplish that goal, while Redux is currently not implemented.
                    To finalise the style and formatting of the webpage basic knowledge in HTML and CSS was needed.
                </p>
                <div className="techpic">
                    <img src={reactjs} alt="reactjs"></img> 
                    <img src={html5} alt="html5"></img> 
                    <img src={css3} alt="css3"></img> 
                </div>
                <p>
                    The heart of this website comes from an open source json API database as provided by newsapi.org. 
                    The database consists of live and high quality articles from internally renowned news paper. 
                    Please find a more comprehensive overview of these news paper in the about section.
                    NewsApi provides an access to this database via standardized API functions which can be called 500 times for free per account per day. 
                    Please have a look on newsapi.org to inform yourself further. 
                </p>
                <div className="techpic">
                    <img src={newsapi} alt="newsapi"></img>
                </div>
                <p>
                    The technical framework of the site is set up mainly with Amazon Web Services (AWS) supported by a GitHub repsository. 
                    The Amazon cloud9 IDE platform has been used to develop the code since the beginning. 
                    On regular intervals the code was pushed on to my GitHub repository to store and keep track of developments. 
                    With that set up hosting your code on a publicly accessable webpage was made easy by Amazon. 
                    First, I had to buy the public domain name via AWS' Route53 servies and then brought the entire code live with AWS Amplify directly from my GitHub repository.
                    From my limited personal experience I can only recommend using GitHub and Cloud9 for your code development
                </p>
                <div className="techpic">
                    <img src={aws} alt="aws"></img>
                    <img src={github} alt="github"></img>
                    <img src={cloud9} alt="cloud9"></img>

                </div>
            </div>
            );
    }
}

export default Technical;