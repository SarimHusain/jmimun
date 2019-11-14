import React, { Component } from 'react'
import './static/styles/Card.css'

export class Card extends Component{
    render(){
        return (
            <div className="card-container">
                <div className="card-content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}