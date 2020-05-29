import React, { Component } from 'react';
import Navbar   from './Navbar';
import Footer   from './Footer';
import * as apiCalls from './Api';
import { Switch, Route, Redirect} from 'react-router-dom';
import NewsList from './NewsList';
import Technical from './Technical';
import About from './About';
import Contact from './Contact';




  class App extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            news: [],
            searchActive:false
        };
    }
    
    
    componentDidMount(){
        this.loadNews();
    }
     
    async loadNews(val,search){
          let news = await apiCalls.getNews(val,search);
          this.setState({news: news.articles});
    }
    
    async changeSearchActive(){
      this.setState({searchActive:true});
      setTimeout(
            function() {
                this.setState({searchActive:false});
            }
            .bind(this),
            3000
        );
    }
    
   
    
  render(){
    const searchActive = this.state.searchActive;
    
    return (
      <div className="app">
        <Navbar loadNews={this.loadNews.bind(this)} changeSearchActive={this.changeSearchActive.bind(this)} />
            <Switch>
              <Route  exact path="/"
                      render={() => <NewsList news={this.state.news} />} />
              <Route exact path="/about" >
                      {searchActive ? <Redirect to="/" /> : <About />}
              </Route>
              <Route exact path="/technical" >
                      {searchActive ? <Redirect to="/" /> : <Technical />}
              </Route>
              <Route exact path="/contact" >
                      {searchActive ? <Redirect to="/" /> : <Contact />}
              </Route>
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
