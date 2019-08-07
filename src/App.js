import React from 'react'
import './App.css'

import { 
  Grid,
  } from 'semantic-ui-react'
import {
  Route,
  BrowserRouter,
  } from "react-router-dom"

import Home from "./components/Home"
import Instructions from "./components/Instructions"
import Contact from "./components/Contact"

import NavBar from './components/NavBar'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      page: "Home"
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Grid centered>
            <div className="page">
              <NavBar />
              <div>
                <Route exact path="/" component={Home}/>
                <Route path="/instructions" component={Instructions}/>
                <Route path="/contact" component={Contact}/>
              </div>
            </div>
          </Grid>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
