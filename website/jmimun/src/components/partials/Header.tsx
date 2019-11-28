import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../static/styles/partials/Header.css'

export default class Header extends Component {
    state = {
        sidebar: {
            isOpen: false
        },
        navbar: {
            scrollPos: window.pageYOffset,
            atTop: true,
            isVisible: true
        }
    }

    componentDidMount() {
        window.onscroll = this.handleScroll
    }

    toggleSidebar = () => {
        this.setState(() => {
            let { sidebar } = this.state
            sidebar.isOpen = !sidebar.isOpen
            return {
                sidebar
            }
        })
    }

    handleScroll = () => {
        let { navbar } = this.state;
        navbar.isVisible = navbar.scrollPos > window.pageYOffset
        navbar.scrollPos = window.pageYOffset
        navbar.atTop = !navbar.scrollPos
        this.setState(navbar)
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
                  <Link onClick={this.toggleSidebar} to={'/speakers'}>Speakers</Link>
                  <Link onClick={this.toggleSidebar} to={'/team'}>Team</Link>
                  <Link onClick={this.toggleSidebar} to={'/contact'}>Contact</Link>
                  <Link onClick={this.toggleSidebar} to={'/register'}>Register</Link>
                </nav>
              </div>

              <div className="sidebar-shadow" id="sidebar-shadow" onClick={this.toggleSidebar}/>
              
              <nav className="desktop-nav">
                <Link to={'/'}>About</Link>
                <Link to={'/speakers'}>Speakers</Link>
                <Link to={'/team'}>Team</Link>
                <Link to={'/contact'}>Contact</Link>
                <Link to={'/register'}>Register</Link>
              </nav>
            </div>
          </header>
        )
    }
}