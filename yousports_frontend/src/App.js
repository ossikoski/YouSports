import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Nav from './components/Nav.js'
import Home from './components/Home.js'
import Nba from './components/Nba.js'


const App = () => {


  return (
    <div className="App" style={{ backgroundColor: 'black' }}>
      <Nav/>
      <Switch>
        <Route path="/nba">
          <Nba/>
        </Route>
        <Route path="/about">
          <div></div>
        </Route>
        <Route path="/login">
          <div></div>
        </Route>
        <Route path="/register">
          <div></div>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
      
    </div>
  )
}

export default App
