import React, { Component } from 'react'
import './styles/committees.css'
import { Button } from '../components/Button'

export default class WTO extends Component {
    render() {
        return (
            <div className="committee">
                <div className="container">
                    <div className="title">
                        <h1>WTO</h1>
                    </div>
                </div>
                <div className="container">
                    <div className="content">
                        <p>
                            The definition and use of trading over the years has changed drastically overtime. It is not just exchange of goods anymore, but also exchange of ideas.
                            World Trade Organization is the only global international organization dealing with the rules of trade between nations. The goal of WTO is to ensure that trade flows as smoothly, predictably and freely as possible.
                        </p>
                        <Button color="primary" size="medium" onClick={() => { }}>
                            Register
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}