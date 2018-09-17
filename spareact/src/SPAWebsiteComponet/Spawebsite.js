import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter,NavLink,Route,BrowserRouter,Redirect} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Friends from './Friends'

class SpaWebsite extends React.Component{
    render(){
    return(
        <BrowserRouter>
            <div>
            <h1>SPA in React</h1>
            <ul>
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink exact to="/about">About</NavLink></li>
                <li><NavLink exact strict to="/friends">Friends</NavLink></li>
                </ul>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact strict path="/friends" component={Friends}/>
                    <Redirect to="/" />
        </div>
        </div>

        </BrowserRouter>
    )
}
}

export default SpaWebsite;
