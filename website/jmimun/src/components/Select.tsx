import React, { Component } from 'react'
import './static/styles/Select.css'

interface SelectProps {
    options: Array<string>,
    className?: string,
    name?: string,
    onChange: Function
}

export default class Select extends Component<SelectProps>{
    render() {
        return (
            <div className="select-container">
                <select name={this.props.name} className="select" onChange={(event)=>{this.props.onChange(event)}}>
                    {
                        this.props.options.map(option => {
                            return (
                                <option value={option}>{option}</option>
                            )
                        })
                    }
                </select>
            </div>
        )
    }
}