import React, { Component } from 'react'
import './styles/committees.css'
import { Button } from '../components/Button'

export default class UNHRC extends Component {
    render() {
        return (
            <div className="committee">
                <div className="container">
                    <div className="title">
                        <h1>UNHRC</h1>
                    </div>
                </div>
                <div className="container">
                    <div className="content">
                        <p>
                            The Human Right Council Committee is responsible for issues adhering to a violation of human rights. It also plays a major role in the promotion and protection
                            of human rights in the areas pertaining to economic, social and political rights. With regards to preferences on different cultures, it focuses on the right to freedom and personal liberty, the right to follow a religious belief and the right to life.
                            It can also be referred to as a "helper of fundamental rights" for those in need.
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