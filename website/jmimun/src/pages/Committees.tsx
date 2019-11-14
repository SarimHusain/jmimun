import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import './styles/Committees.css'
export class Committees extends Component {

    render() {
        return (
            <div className="committees">
                <div className="container">
                    <div className="title">
                        <h1>Committees</h1>
                    </div>
                </div>
                <div className="container">
                    <Card>
                        <h3>UNGA</h3>
                        <Button color="secondary" size="medium" onClick={() => { }}>
                            View Matrix
                        </Button>
                        <Button color="primary" size="medium" onClick={() => { }}>
                            Register
                        </Button>
                    </Card>
                    <Card>
                        <h3>UNSC</h3>
                        <Button color="secondary" size="medium" onClick={() => { }}>
                            View Matrix
                        </Button>
                        <Button color="primary" size="medium" onClick={() => { }}>
                            Register
                        </Button>
                    </Card>
                    <Card>
                        <h3>UNHRC</h3>
                        <Button color="secondary" size="medium" onClick={() => { }}>
                            View Matrix
                        </Button>
                        <Button color="primary" size="medium" onClick={() => { }}>
                            Register
                        </Button>
                    </Card>
                    <Card>
                        <h3>WTO</h3>
                        <Button color="secondary" size="medium" onClick={() => { }}>
                            View Matrix
                        </Button>
                        <Button color="primary" size="medium" onClick={() => { }}>
                            Register
                        </Button>
                    </Card>
                    <Card>
                        <h3>AU</h3>
                        <Button color="secondary" size="medium" onClick={() => { }}>
                            View Matrix
                        </Button>
                        <Button color="primary" size="medium" onClick={() => { }}>
                            Register
                        </Button>
                    </Card>
                    <Card>
                        <h3>ECOSOC</h3>
                        <Button color="secondary" size="medium" onClick={() => { }}>
                            View Matrix
                        </Button>
                        <Button color="primary" size="medium" onClick={() => { }}>
                            Register
                        </Button>
                    </Card>
                    <Card>
                        <h3>WW3</h3>
                        <Button color="secondary" size="medium" onClick={() => { }}>
                            View Matrix
                        </Button>
                        <Button color="primary" size="medium" onClick={() => { }}>
                            Register
                        </Button>
                    </Card>
                    <Card>
                        <h3>AIPPM</h3>
                        <Button color="secondary" size="medium" onClick={() => { }}>
                            View Matrix
                        </Button>
                        <Button color="primary" size="medium" onClick={() => { }}>
                            Register
                        </Button>
                    </Card>

                </div>
            </div>
        )
    }
}