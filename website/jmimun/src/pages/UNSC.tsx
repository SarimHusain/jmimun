import React, { Component } from 'react'
import './styles/committees.css'
import { Button } from '../components/Button'

export default class UNSC extends Component {
    render() {
        return (
            <div className="committee">
                <div className="container">
                    <div className="title">
                        <h1>UNSC</h1>
                    </div>
                </div>
                <div className="container">
                    <div className="content">
                        <p>
                        The Security Council has primary responsibility for maintaining international peace and security. When the Council considers a threat to international peace, it finds out ways to settle the dispute peacefully. 
                        </p>
                        <Button color="primary" size="medium" onClick={()=>{}}>
                            Register
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}