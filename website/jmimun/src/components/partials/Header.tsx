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
                <div className={"header-container" + (this.state.navbar.atTop ? ' top' : '') + (!this.state.navbar.isVisible ? ' hidden' : '')}>
                    <input type="checkbox" checked={this.state.sidebar.isOpen} id="sidebar-toggle" hidden readOnly />
                    <div className="sidebar-shadow"></div>
                    <label htmlFor="sidebar-toggle" className="hamburger" onClick={this.toggleSidebar}><span></span></label>
                    <div className="logo-mobile"><img src="/img/jmimun-jmi.svg" alt="" className="jmi"/><img src="/img/jmimun-mun.svg" alt="" className={"mun"+(this.state.navbar.atTop?' top':'')}/></div>
                    <div className="sidebar">
                        <nav className="sidebar-nav">
                            <Link onClick={this.toggleSidebar} to={'/'}>Home</Link>
                            <Link onClick={this.toggleSidebar} to={'/contact'}>Contact</Link>
                        </nav>
                    </div>
                    <div className="navbar">
                        <nav className='desktop-nav'>
                            <Link to={'/'}><img src="/img/jmimun-jmi.svg" alt="" className="logo jmi"/><img src="/img/jmimun-mun.svg" alt="" className={"logo mun"+(this.state.navbar.atTop?' top':'')}/></Link>
                            <Link to={'/'}>Home</Link>
                            <div className="dropdown">
                                <Link to={'/committees'}>Committees</Link>
                                <div className="dropdown-content">
                                    <Link to={'/committee/unga'}>UNGA</Link>
                                    <Link to={'/committee/unsc'}>UNSC</Link>
                                    <Link to={'/committee/unhrc'}>UNHRC</Link>
                                    <Link to={'/committee/wto'}>WTO</Link>
                                    <Link to={'/committee/au'}>AU</Link>
                                    <Link to={'/committee/ecosoc'}>ECOSOC</Link>
                                    <Link to={'/committee/ww3'}>WW3</Link>
                                    <Link to={'/committee/aippm'}>AIPPM</Link>

                                </div>
                            </div>
                            <Link to={'/contact'}>Contact</Link>
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}