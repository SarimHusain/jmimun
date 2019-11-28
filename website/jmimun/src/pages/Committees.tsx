import React, { Component } from 'react'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import './styles/Committees.css'
import { Link } from 'react-router-dom'
export class Committees extends Component {

    render() {
        return (
            <article className="committees">
                <div className="container">
                    <div className="title">
                        <h1>Committees</h1>
                    </div>
                </div>
                <div className="container">
                    <Link to={"/committee/unga"}>
                        <Card>
                            <h3 className="blue">UNGA</h3>
                            <p className="info">One line information here</p>
                            <div className="action" style={{ "color": "#00b6f1" }}>
                                Click to view more
                        </div>
                        </Card>
                    </Link>
                    <Link to={'/committee/unsc'}>
                        <Card>
                            <h3 className="blue">UNSC</h3>
                            <p className="info">One line information here</p>
                            <div className="action" style={{ "color": "#00b6f1" }}>
                                Click to view more
                        </div>
                        </Card>
                    </Link>
                    <Link to={'/committee/unhrc'}>
                        <Card>
                            <h3 className="blue">UNHRC</h3>
                            <p className="info">One line information here</p>
                            <div className="action" style={{ "color": "#00b6f1" }}>
                                Click to view more
                        </div>
                        </Card>
                    </Link>
                    <Link to={'/committee/wto'}>
                        <Card>
                            <h3 className="blue">WTO</h3>
                            <p className="info">One line information here</p>
                            <div className="action" style={{ "color": "#00b6f1" }}>
                                Click to view more
                        </div>
                        </Card>
                    </Link>
                    <Link to={'/committee/au'}>
                        <Card>
                            <h3 className="blue">AU</h3>
                            <p className="info">One line information here</p>
                            <div className="action" style={{ "color": "#00b6f1" }}>
                                Click to view more
                        </div>
                        </Card>
                    </Link>
                    <Link to={'/committee/ecosoc'}>
                        <Card>
                            <h3 className="blue">ECOSOC</h3>
                            <p className="info">One line information here</p>
                            <div className="action" style={{ "color": "#00b6f1" }}>
                                Click to view more
                        </div>
                        </Card>
                    </Link>
                    <Link to={'/committee/ww3'}>
                        <Card>
                            <h3 className="blue">WW3</h3>
                            <p className="info">One line information here</p>
                            <div className="action" style={{ "color": "#00b6f1" }}>
                                Click to view more
                        </div>
                        </Card>
                    </Link>
                    <Link to={'/committee/aippm'}>
                        <Card>
                            <h3 className="blue">AIPPM</h3>
                            <p className="info">One line information here</p>
                            <div className="action" style={{ "color": "#00b6f1" }}>
                                Click to view more
                        </div>
                        </Card>
                    </Link>

                </div>
            </article>
        )
    }
}