import React, { Component } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import alj from './pictures/aljazeera.jpg';
import bbc from './pictures/bbcnews.png';
import blo from './pictures/bloomberg.jpg';
import bus from './pictures/businsider.png';
import goo from './pictures/googlenews.png';
import huf from './pictures/huffpost.jpg';
import reu from './pictures/reuters.png';
import tim from './pictures/time.png';
import wsj from './pictures/wsj.png';



class About extends Component{
    
    render(){
        const responsive = {
                  desktop: {
                    breakpoint: { max: 3000, min: 1024 },
                    items: 4
                  },
                  tablet: {
                    breakpoint: { max: 1024, min: 464 },
                    items: 3
                  },
                  mobile: {
                    breakpoint: { max: 464, min: 0 },
                    items: 3
                  }
    };
        


        return(
        <div className ="about">
            <div className="abouttext">
                <h1>
                    This is the story behind the project!
                </h1>
                <p> 
                    Humans are more attracted towards violence and fear than to positive news.
                    The current news seem to take massive advantage of that feeding only negative news back to the public.
                    This can lead to a negative spiral on a global scale.
                </p>
                <p> 
                    Hence this project focuses on looking on the brighter side of things.
                    NewsNobodyReads.com takes the top headline from the worlds leading newspapers and filters negative reporting out.
                </p>
                <p>
                    Here are some pictures of the newspapers which have been used for the project.
                </p>
            </div>
            <div className="slider"> 
                <Carousel 
                    responsive={responsive}
                    showDots={false}
                    infinite={true}
                    centerMode={false}
                    arrows={true}
                    autoPlay={false}
                    autoPlaySpeed={1000}>
                    <div>
                       <img src={alj} alt="al-jazeera-en"></img>
                    </div>
                    <div>
                      <img src={bbc} alt="bbc-news"></img>
                    </div>
                    <div>
                      <img src={bus} alt="business-insider"></img>
                    </div>
                    <div>
                      <img src={blo} alt="bloomberg"></img>
                    </div>
                    <div>
                      <img src={goo} alt="google-news"></img>
                    </div>
                    <div>
                       <img src={huf} alt="huffington-post"></img>
                    </div>
                    <div>
                      <img src={reu} alt="reuters"></img>
                    </div>
                    <div>
                     <img src={tim} alt="time"></img>
                    </div>
                    <div>
                      <img src={wsj} alt="wall-street-journal"></img>
                    </div>
                  </Carousel>
            </div>
        </div>
        );
    }
}

export default About;