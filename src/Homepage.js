import React from 'react';
import { Switch, Route} from 'react-router-dom';
import NewsList from './NewsList';
import Technical from './Technical';
import About from './About';
import Contact from './Contact';



const Homepage = () => (
    <Switch>
        <Route  exact path="/"
                render={(props) => <NewsList {...props} />} />

        <Route exact path="/about" component={About} />
        <Route exact path="/technical" component={Technical} />
        <Route exact path="/contact" component={Contact} />
    </Switch>
    );

export default Homepage;
    



