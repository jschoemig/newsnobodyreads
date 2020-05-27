import React, {Component} from 'react';
import NewsItem from './NewsItem';
import Navbar from './Navbar';
import * as apiCalls from './Api';


class NewsList extends Component{
    constructor(props){
        super(props);
        this.state = {
            news: [],
            search: false
        };
        this.loadNews = this.loadNews.bind(this);
    }
    
    componentDidMount(){
        this.loadNews();
     }
     
  
    async loadNews(val){
        let news = await apiCalls.getNews(val);
        this.setState({news: news.articles});
    }
    
    

    
    render(){
       const news = this.state.news.map((n) => (
        <NewsItem
            key={n.url}     // url for each news article should be unique, hence is used here as key
            {...n}
            />
        ));
        return(
            <div className="newslist">
                <Navbar loadNews = {this.loadNews} />
                <ol>
                    {news}
                </ol>
            </div>
            );
    }
}

export default NewsList;