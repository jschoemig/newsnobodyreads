/*const APIURL =''; 


export async function getNews(){       // export either here or after function with export default getTodos()
        return fetch(APIURL)            // because it is an async function 
        .then( resp => {
            if (!resp.ok) {
                if(resp.status >= 400 && resp.status < 500) {
                    return resp.json().then(data => {
                        let err = {errorMessage: data.message};
                        throw err;
                    });
                } else {
                    let err = {errorMessage: "Please try again later, server does not respond currently"};
                    throw err;
                }
                
            }
        return resp.json();
        });
}
*/


fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=1894a0623e654d328392e2cc7ff458a4')
.then(resp => resp.json())
.then(data =>
    this.setState({news: data.articles})
);
