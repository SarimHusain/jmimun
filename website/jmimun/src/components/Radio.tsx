import React, { Component } from 'react'
import './static/styles/Radio.css'

interface RadioProps {
    options: Array<string>,
    className?: string,
    name?: string,
    onChange: Function
}

export default class Radio extends Component<RadioProps>{
    render() {
        return (
            <div className="radio-container">
                {this.props.options.map(option => {
                    return (

                        <label className="radio-label">
                            <input
                                type="radio"
                                className={this.props.className}
                                name={this.props.name}
                                id={this.props.name + '-' + option}
                                value={option}
                                onChange={(event) => { this.props.onChange(event) }}
                            />
                            <span className="checkmark"></span>
                            {option}
                        </label>
                    )
                })
                }
            </div>
        )
    }
}