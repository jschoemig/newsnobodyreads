import React, { Component } from 'react';
//import Carousel from 'react-multi-carousel';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
        const settings = {
                      dots: true,
                      arrows:false, 
                      infinite: true,
                      speed: 5000,
                      slidesToShow: 7,
                      slidesToScroll: 3,
                      autoplay:false,
                      centermode: true,
                      responsive: [
                            {
                              breakpoint: 700,
                              settings: {
                                slidesToShow: 5,
                              }
                            },
                            {
                              breakpoint: 480,
                              settings: {
                                slidesToShow: 3,
                                autoplay:true,
                                autoplaySpeed: 0,
                                dots:false
                              }
                            }
                          ]
                };
    

        return(
        <div className ="about">
            <div className="abouttext">
                <h1>
                    This is the story behind the project!
                </h1>
                <p> 
                   Do you feel that general news often focus on the negative side of human nature and interaction?
                </p>
                <p> 
                   Have you noticed that violence and scandals attract public attention more than positive events?
                </p>
                 <p> 
                    Do you think that rather than being fully objective general news selects stories often on their profit potential?
                </p>
                <p> 
                    These thoughts are the motivation behind the project. 
                    Due to the three raised points, I believe general global news are biased towards negative events.
                    Where I believe that humans are more inclined to watch the negative, scandalous side of things, I believe at the same time that this natural instint does not always do us good. 
                    Now NewsNobodyReads.com tries lie the focus specifically on the more positive side of global news.
                    So what you see on here is what what's really going on in the world today.
                    To prevent anyone can jump to the scandalous article about mass murdering, or financial anxiety these news are excluded from that page.
                    This website only allows you to inform yourself about the positive events which are going on in the world. 
                    And where NewsNobodyReads.com is clearly biased towards on side of the coin that is very much intended. 
                    It serves as a counterweight to general news webpages out there and human inclincation in general. 
                </p>
                <p>
                    What you see on the landing page of the website is the product of filter algorithm of thousands of live global news articles as provided by NewsApi. 
                    The filter criteria are comprised in a way that a certain list of words won't show up in the headlines of the displayed stories. 
                    The words selected are the words which appear the most often in common newspapers and hence might be the most clicked on target words in the industry.
                    Hence, with filtering these words out I am not showing the most read news articles online. 
                    This does not mean I am necessairly filtering out the most read news stories. 
                    There is a difference. 
                    Popular news stories might still show up on NewsNobodyReads.com, but when they do it will be the more positive view on these. 
                </p>
                <p>
                    So below you find all the newspapers which filtered online articles built the foundation of this website. 
                    All of the articles are in English and hence should be available to a large audience. 
                    I hope you find here a couple of stories which makes you believe the world is not entirly bad.
                </p>
            </div>
            <div className="slider"> 
                <Slider {...settings}>
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
                  </Slider>
            </div>
        </div>
        );
    }
}

export default About;