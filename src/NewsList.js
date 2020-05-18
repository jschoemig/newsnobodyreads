import React, {Component} from 'react';
import NewsItem from './NewsItem';
//import * as apiCalls from './api';  // copies everything over from helper document api.js

class NewsList extends Component{
    constructor(props){
        super(props);
        this.state = {
            news: []
        };
    }
    
    componentWillMount(){
        const url   = 'https://newsapi.org/v2/everything?qInTitle=';  // only q for search in title and body
        const q     = 'victoria';
        const key   = '&apiKey=1894a0623e654d328392e2cc7ff458a4';
        
        fetch(url + q + key)
        .then(resp => resp.json())
        .then(data => this.setState({news: data.articles}));
     }
    
 
    
    render(){
       const news = this.state.news.map((n) => (
        <NewsItem
            //key={n.}
            {...n}
            />
        ));
        console.log(this.state);    
        return(
            <div>
                <h1> NewsList! </h1>
                 <ul>
                    {news}
                </ul>
            </div>
            );
    }
}

export default NewsList;