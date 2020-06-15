import React, { Component } from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import Navbar   from './Navbar';
import Footer   from './Footer';
import * as apiCalls from './Api';
import NewsList from './NewsList';
import Technical from './Technical';
import About from './About';
import Contact from './Contact';
import Loading from './Loading';
import Oops from './Oops';




  class App extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            news: [],
            searchActive:false,
            loading:false,
            error:true
        };
    }
    
    
    componentDidMount(){
        this.loadNews();
    }
     
    async loadNews(val,search){
          this.setState({loading:true});
          let news = await apiCalls.getNews(val,search);
          if (typeof news === "undefined"){this.setState({error:true})}
          else{
          setTimeout(
            function() {
                this.setState({news: news.articles, loading: false});
            }
            .bind(this),
            500
        );
          }

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
    const searchActive  = this.state.searchActive;
    const loading       = this.state.loading;
    const error         = this.state.error;
    
    return (
      <div className="app">
        <Navbar loadNews={this.loadNews.bind(this)} changeSearchActive={this.changeSearchActive.bind(this)} />
           {error? <Oops />:
           <Switch>

              {loading? 
              <Route exact path="/"> <Loading /> </Route>:
              <Route  exact path="/" 
                     render={ () =>  <NewsList news={this.state.news} />} />
              }
              
              <Route exact path="/about" >
                      {searchActive ? <Redirect to="/" /> : <About />}
              </Route>
              <Route exact path="/technical" >
                      {searchActive ? <Redirect to="/" /> : <Technical />}
              </Route>
              <Route exact path="/contact" >
                      {searchActive ? <Redirect to="/" /> : <Contact />}
              </Route>
          </Switch> }
        <Footer />
      </div>
    );
  }
}

export default App;
