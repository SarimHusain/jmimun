import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router';
import Home from './pages/Home'
import Contact from './pages/Contact'
import Header from './components/partials/Header'
import Footer from './components/partials/Footer'
import { BrowserRouter } from 'react-router-dom';
import UNGA from './pages/UNGA';
import UNSC from './pages/UNSC';
import UNHRC from './pages/UNHRC';
import WTO from './pages/WTO';
import AU from './pages/AU';
import ECOSOC from './pages/ECOSOC';
import WW3 from './pages/WW3';
import AIPPM from './pages/AIPPM';
import Register from './pages/Register';
import { Committees } from './pages/Committees';
import AppContextProvider from './AppContextProvider';


export class App extends Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          
            {/* <AppContext.Provider
              value= {{
                state: {
                  committee: ""
                },
                actions : {
                  router: (path:string)=>{
                    this.context.history.push(path)
                  },
                  appState: (committee:string)=>{this.setState({committee:committee})}
                }
              }

              } > */}
              <AppContextProvider>
            <Header />
            
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/committees" component={Committees} />
                <Route exact path="/committee/unga" component={UNGA} />
                <Route exact path="/committee/unsc" component={UNSC} />
                <Route exact path="/committee/unhrc" component={UNHRC} />
                <Route exact path="/committee/wto" component={WTO} />
                <Route exact path="/committee/au" component={AU} />
                <Route exact path="/committee/ecosoc" component={ECOSOC} />
                <Route exact path="/committee/ww3" component={WW3} />
                <Route exact path="/committee/aippm" component={AIPPM} />
        
            </Switch>
            
            <Footer />
            </AppContextProvider>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
