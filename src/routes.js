import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Landing from './Components/Landing/Landing'
import Portfolio from './Components/Portfolio/Portfolio'
import Music from './Components/Music/Music'
import Contact from './Components/Contact/Contact'
import About from './Components/About/About'
import Menu from './Components/Header/Menu'
import Drop from './Components/Portfolio/The Drop/Drop'
import Hooliginweb from './Components/Portfolio/Hooligin Music/Hooliginweb'


export default (
    <Switch>
        <Route exact path ='/' component={Landing}/>
        <Route path ='/home' component={Landing}/>
        <Route path ='/portfolio' component={Portfolio}/>
        <Route path ='/music' component={Music}/>
        <Route path ='/contact' component={Contact}/>
        <Route path ='/about' component={About}/>
        <Route path ='/menu' component={Menu}/>
        <Route path ='/the-drop' component={Drop}/>
        <Route path ='/hooligin-music' component={Hooliginweb}/>
    </Switch>
)