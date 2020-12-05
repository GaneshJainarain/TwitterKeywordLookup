import React from 'react';
import { Switch, Route} from 'react-router-dom'
import FrontPage from './FrontPage';
import KeywordSearch from './KeywordSearch';
import Login from './Login';





const Main = () => (
    
        <Switch>

            <Route exact path="/" component={FrontPage}/>
            <Route path="/KeywordSearch" component={KeywordSearch}/>
            <Route path="/Login" component={Login}/>

            

        </Switch>
    
)


export default Main;