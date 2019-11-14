import React, { Component } from 'react'
import './styles/committee.css'
import { Button } from '../components/Button'

export default class ECOSOC extends Component {
    render() {
        return (
            <div className="committee">
                <div className="container">
                    <div className="title">
                        <h1>ECOSOC</h1>
                    </div>
                </div>
                <div className="container">
                    <div className="content">
                        <p>
                        Economic and Social Council (ECOSOC) is the United Nations’ central platform for reflection, debate, and innovative thinking on sustainable development. ECOSOC engages a wide variety of stakeholders – in a productive dialogue on sustainable development through a programmatic cycle of meetings. The work of the Council is guided by an issue-based approach, and there is an annual theme that accompanies each programmatic cycle, ensuring a sustained and focused discussion among multiple stakeholders.
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