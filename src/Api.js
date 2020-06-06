import wordlist from './WordList';
import sources from './Sources';

const url           = 'https://newsapi.org/v2/everything?qInTitle=';         // everthing and then filtered
const qInTitle      =  wordlist;                                    // only q for search in title and body
const s             =  sources;
const key           = '&sortBy=relevancy&apiKey=1894a0623e654d328392e2cc7ff458a4';      // sortBy popularity - relevancy - publishedAt (default)
const proxyUrl      = 'https://cors-anywhere.herokuapp.com/';       // this proxy url serves as middleware - hence, my api request connects with heroku and they make the API call for me
        
  
  export async function getNews(val,search){
      if(search){
        return fetch(proxyUrl + url + val + s + key)            // because it is an async function 
                .then( resp => { return resp.json() });
      } else {
        return fetch(proxyUrl + url + qInTitle + s + key)            // because it is an async function 
                .then( resp => { return resp.json() });
      }
        
  }
 