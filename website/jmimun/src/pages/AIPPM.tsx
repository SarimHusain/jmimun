import React, { Component } from 'react'
import './styles/committees.css'
import { Button } from '../components/Button'

export default class AIPPM extends Component {
    render() {
        return (
            <div className="committee">
                <div className="container">
                    <div className="title">
                        <h1>AIPPM</h1>
                    </div>
                </div>
                <div className="container">
                    <div className="content">
                        <p>
                            Indulge in unrestricted political discussion, deliberation and debate free from legislative functions. Take charge of how the Parliament works in your hands!
                            The All India Political Party Meet will provide a platform where diverse political personalities and perspectives will come together and join hands to work on issues of national importance.
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