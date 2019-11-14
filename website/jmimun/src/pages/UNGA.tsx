import React, { Component } from 'react'
import './styles/committee.css'
import { Button } from '../components/Button'

export default class UNGA extends Component {
    state = {
        matrix: [
            { "name": "Qatar", "status": "Booked" },
            { "name": "Jordan", "status": "Booked" },
            { "name": "Kazakhstan", "status": "Alloted" },
            { "name": "Mozambique", "status": "Available" }
        ]
    }

    fetchMatrix() {

    }
    render() {
        return (
            <div className="committee">
                <div className="container">
                    <div className="title">
                        <h1>UNGA</h1>
                    </div>
                </div>
                <div className="container">
                    <div className="content">
                        <p>
                            The United Nations General Assembly is one of the six principal organs of the United Nations (UN),
                            the only one in which all member nations have equal representation, and the main deliberative, policy-making and representative organ of the UN.
                            Its powers are to oversee the budget of the UN, appoint the non-permanent members to the Security Council,
                            receive reports from other parts of the UN and make recommendations in the form of General Assembly Resolutions. It has also established numerous subsidiary organs.
                        </p>
                        <Button color="primary" size="medium" onClick={() => { }}>
                            Register
                        </Button>
                    </div>
                </div>
                <div className="container">
                    <div className="title">
                        <h2>Matrix</h2>
                    </div>
                </div>
                <div className="container">
                    <div className="matrix">
                        <table className="matrix-table">
                            <tr>
                                <th className="name">Name</th>
                                <th className="availablity">Availablity</th>
                                <th className="availablity-marker"></th>
                            </tr>
                            {this.state.matrix.map(portfolio => {
                                return (
                                    <tr>
                                        <td className="name"><h4>{portfolio.name}</h4></td>
                                        <td className="availablity">{portfolio.status}</td>
                                        <td><div className={
                                            portfolio.status === 'Booked' ? "availablity-marker red" : (portfolio.status === "Available" ? "availablity-marker green" : "availablity-marker orange")
                                        }></div></td>
                                    </tr>
                                )
                            })}
                        </table>
                    </div>
                </div>
            </div >
        )
    }
}