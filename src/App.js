import './App.css';

import React from 'react'
import {BrowserRouter, Route, NavLink} from 'react-router-dom'

import Home     from './pages/Home'
import Contacts from './pages/Contacts'

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Hello DevMeetings!</h1>

        <nav>
          <NavLink exact={true} to="/" activeStyle={{color: 'red'}}>Home</NavLink>
          <br/>
          <NavLink to="/contacts" activeStyle={{color: 'red'}}>Contacts</NavLink>
        </nav>

        <p/>

        <Route path="/" component={Home}></Route>
        <Route path="/contacts" component={Contacts}></Route>
      </div>
    </BrowserRouter>
  )
}

export default App
