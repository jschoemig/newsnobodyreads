import React, {Component} from 'react';
import NewsItem from './NewsItem';
import wordlist from './WordList';
import sources from './Sources';
//import * as apiCalls from './api';  // copies everything over from helper document api.js

class NewsList extends Component{
    constructor(props){
        super(props);
        this.state = {
            news: []
        };
    }
    
    componentDidMount(){
        const url           = 'https://newsapi.org/v2/everything?qInTitle=';         // everthing and then filtered
        const qInTitle      =  wordlist;                                    // only q for search in title and body
        const s             =  sources;
        const key           = '&sortBy=relevancy&apiKey=1894a0623e654d328392e2cc7ff458a4';      // sortBy popularity - relevancy - publishedAt (default)
        const proxyUrl      = 'https://cors-anywhere.herokuapp.com/';       // this proxy url serves as middleware - hence, my api request connects with heroku and they make the API call for me

        fetch(proxyUrl + url + qInTitle + s + key)
        .then(resp => resp.json())
        .then(data => this.setState({news: data.articles}));
     }

    
 
    
    render(){
       const news = this.state.news.map((n) => (
        <NewsItem
            key={n.url}     // url for each news article should be unique, hence is used here as key
            {...n}
            />
        ));
        console.log(this.state);    
        return(
            <div className="newslist">
                <ol>
                    {news}
                </ol>
            </div>
            );
    }
}

export default NewsList;