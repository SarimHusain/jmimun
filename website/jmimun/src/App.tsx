import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { AppContext } from './AppContext';
import { Switch, Route } from 'react-router';
import Home from './components/Home'
import Contact from './components/Contact'
import Header from './components/partials/Header'
import Footer from './components/partials/Footer'


export class App extends Component {
  static contextType = AppContext
  context!: React.ContextType<typeof AppContext>

  render(){
    return (
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/contact" component={Contact}/>
      </Switch>
    )
  }
}

export default App;
