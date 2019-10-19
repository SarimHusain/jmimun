import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Header extends Component {
    state = {
        sidebar: {
            isOpen: false
        }
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

    render() {
        return (
            <header>
                <input type="checkbox" checked={this.state.sidebar.isOpen} id="sidebar-toggle" hidden readOnly />
                <label htmlFor="sidebar-toggle" className="hamburger" onClick={this.toggleSidebar}><span></span></label>
                
                <div className="sidebar">
                    <nav className="sidebar-nav">
                        <Link onClick={this.toggleSidebar} to={'/'}>Home</Link>
                        <Link onClick={this.toggleSidebar} to={'/contact'}>Contact</Link>
                    </nav>
                </div>
                <nav className="desktop-nav">
                    <Link to={'/'}>Home</Link>
                    <Link to={'/contact'}>Contact</Link>
                </nav>
            </header>
        )
    }
}