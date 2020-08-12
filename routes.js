import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Landing from './src/Components/Landing'
import Portfolio from './src/Components/Portfolio'
import Music from './src/Components/Music'
import Contact from './src/Components/Contact'
import About from './src/Components/About'


export default (
    <Switch>
        <Route exact path ='/home' component={Landing}/>
        <Route path ='/portfolio' component={Portfolio}/>
        <Route path ='/music' component={Music}/>
        <Route path ='/contact' component={Contact}/>
        <Route path ='/about' component={About}/>
    </Switch>
)