import React, {Component} from 'react';
import NewsItem from './NewsItem';


class NewsList extends Component{
    

    render(){
       const news = this.props.news.map((n) => (
        <NewsItem
            key={n.url}     // url for each news article should be unique, hence is used here as key
            {...n}
        />
        ));
        return(
            <div className="newslist">
                   
                        {(Object.keys(news).length === 0)? 
                        <p> No results found for this search request </p> : 
                        <ol>{news} </ol>
                        }
                   
            </div>
            );
    }
}

export default NewsList;