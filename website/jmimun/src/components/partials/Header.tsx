import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../static/styles/partials/Header.css'

export default class Header extends Component {
    state = {
        sidebar: {
            isOpen: false
        }
    }

    toggleSidebar = () => {
        this.setState(()=>{
          let { sidebar } = this.state
          sidebar.isOpen = !sidebar.isOpen
          return {
            sidebar
          }
        })
      }
 

    render() {
        return (
            <header>
            <div className="container">
              <div className="logo">
                  <img src="/img/jmimun.png" alt=""/>
              </div>
              
              <input type="checkbox" checked={this.state.sidebar.isOpen} id="sidebar-toggle" hidden readOnly/>
              <label htmlFor="sidebar-toggle" className="hamburger" onClick={this.toggleSidebar}><span></span></label>
              
              <div className="sidebar">
                <nav className="sidebar-nav">
                  <Link onClick={this.toggleSidebar} to={'/'}>About</Link>
                  <Link onClick={this.toggleSidebar} to={'/committees'}>Committees</Link>
                  <Link onClick={this.toggleSidebar} to={'/contact'}>Contact</Link>
                </nav>
              </div>

              <div className="sidebar-shadow" id="sidebar-shadow" onClick={this.toggleSidebar}/>
              
              <nav className="desktop-nav">
                <Link to={'/'}>About</Link>
                <Link to={'/committees'}>Committees</Link>
                <Link to={'/contact'}>Contact</Link>
              </nav>
            </div>
          </header>
        )
    }
}