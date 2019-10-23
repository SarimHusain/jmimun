import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../static/partials/Header.css'

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
                <div className="container mobile">
                    <input type="checkbox" checked={this.state.sidebar.isOpen} id="sidebar-toggle" hidden readOnly />
                    <label htmlFor="sidebar-toggle" className="hamburger" onClick={this.toggleSidebar}><span></span></label>

                    <div className="sidebar">
                        <nav className="sidebar-nav">
                            <Link onClick={this.toggleSidebar} to={'/'}>Home</Link>
                            <Link onClick={this.toggleSidebar} to={'/contact'}>Contact</Link>
                        </nav>
                    </div>
                </div>
                <div className={"container desktop" + (this.state.navbar.atTop ? ' black' : '')}>
                    <nav className={'desktop-nav' + (!this.state.navbar.isVisible ? ' hidden' : '')}>
                        <Link to={'/'}>JMIMUN</Link>
                        <Link to={'/'}>Home</Link>
                        <Link to={'/contact'}>Contact</Link>
                    </nav>
                </div>
            </header>
        )
    }
}