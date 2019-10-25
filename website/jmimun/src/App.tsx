import React, { Component } from 'react';
import './App.css';
import { AppContext } from './AppContext';
import { Switch, Route } from 'react-router';
import Home from './components/Home'
import Contact from './components/Contact'
import Header from './components/partials/Header'
import Footer from './components/partials/Footer'
import { BrowserRouter } from 'react-router-dom';
import './components/static/styles/App.css'


export class App extends Component {
  static contextType = AppContext
  context!: React.ContextType<typeof AppContext>

  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
