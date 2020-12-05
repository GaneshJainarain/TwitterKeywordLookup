import React from 'react';
import { Switch, Route} from 'react-router-dom'
import FrontPage from './FrontPage';
import KeywordSearch from './KeywordSearch';




const Main = () => (
    
        <Switch>

            <Route exact path="/" component={FrontPage}/>
            <Route path="/KeywordSearch" component={KeywordSearch}/>
            

        </Switch>
    
)


export default Main;