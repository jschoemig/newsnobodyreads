import wordlist from './WordList';
import sources from './Sources';

const url           = 'https://newsapi.org/v2/everything?qInTitle=';         // everthing and then filtered
const qInTitle      =  wordlist;                                    // only q for search in title and body
const s             =  sources;
const key           = '&sortBy=relevancy&apiKey=99790f3744124e83ad8b029374a59f4b';      // sortBy popularity - relevancy - publishedAt (default)
const proxyUrl      = 'https://cors-anywhere.herokuapp.com/';       // this proxy url serves as middleware - hence, my api request connects with heroku and they make the API call for me

// new APIkey 99790f3744124e83ad8b029374a59f4b 16.02.2022, old APIkey 1894a0623e654d328392e2cc7ff458a4

// https://crossorigin.me/ or https://cors-anywhere.herokuapp.com/, not https://robwu.nl/cors-anywhere.html/ didn't work

function handleErrors(resp) {
    if (!resp.ok)  throw new Error(resp.text);
    return resp.json();
}



  export async function getNews(val,search){
      if(search){
        return fetch( proxyUrl + url + val + s + key)            // because it is an async function
                .then(handleErrors)
                .catch( err =>  console.log(err) );

      } else {
        return fetch( proxyUrl + url + qInTitle + s + key)            // because it is an async function
                .then(handleErrors)
                .catch( err =>  console.log(err) );
      }

  }
