import React, { Component } from 'react'
import './styles/Contact.css'
import {Textbox, Textarea} from '../components/Textbox'
import {inputHandler} from '../libs/inputHandler'
import {Button} from '../components/Button'

export default class Contact extends Component {
    state = {
        required : ['name', 'email', 'message'],
        data: {
            name: String(),
            phone: Number(),
            email: String(),
            message: String()
        }
    }
    handleChangeById = (event: any) => {
        const result = inputHandler(event, this.state)
        this.setState((prevState, props) => (
          result
        ))
      }
    submit(){
    }
    render() {
        return (
            <div className="contact">
                <div className="container white">
                    <div className="title">
                        <h1>Contact Us</h1>
                    </div>
                </div>
                <div className="container">
                <div className="contact-form">
                    <div className="msg">
                        <p>Enter your details and concern. <br/><br/>We'll get back to you shortly</p>
                    </div>
                    <div className="form">
                        <Textbox name="name" placeholder="Full Name" onChange={this.handleChangeById}/>
                        <Textbox name="phone" placeholder="Phone" onChange={this.handleChangeById}/>
                        <Textbox name="email" placeholder="Email" onChange={this.handleChangeById}/>
                        <Textarea name="message" placeholder="Your message goes here" onChange={this.handleChangeById}/>
                        <Button color="primary" onClick={this.submit}>
                            Submit
                        </Button>
                    </div>
                </div>
            </div>
            </div >
        )
    }
}