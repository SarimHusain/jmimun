import React, { Component } from 'react'
import Checkbox from '../components/Checkbox'
import Button from '../components/Button'
import Radio from '../components/Radio'
import { Textbox, Textarea } from '../components/Textbox'
import './styles/Register.css'

interface RegisterProps {
    committee: string
}

export default class Register extends Component {
    state = {
        fields: [
            { "name": "name", "type": "text", "required": true, "placeholder": "Name" },
            { "name": "experience", "type": "textarea", "placeholder": "Experience", "required": true },
            { "name": "age", "type": "number", "placeholder": "Age", "required": true },
            { "name": "Choice", "type": "radio", "options": ["op1", "op2", "op3", "op4"] },
            { "name": "SelectAll", "type": "check", "required": true, "options": ["op1", "op2", "op3", "op4"] }
        ],
        data: {
            "name": "",
            "experience": "",
            "age": 0,
            "Choice": "",
            "SelectAll": []
        },
        section: 1
    }

    regInputHandler(event: any, state: any) {
        var _data = state.data
        if (event.target.type === 'checkbox') {
            if (event.target.checked) {
                if (_data[event.target.name] == null) _data[event.target.name] = []
                _data[event.target.name].push(event.target.value)
            } else {
                _data[event.target.name].pop(event.target.value)
            }
        }
        else if (event.target.type === 'radio') {
            _data[event.target.name] = event.target.value
        }
        else if (event.target.type === 'text' || event.target.type === 'textarea') {
            _data[event.target.name] = event.target.value
        }
        var truth: boolean = true
        for (let i = 0; i < state.fields.length; i++) {
            if (state.fields[i].required) {
                if (_data[state.fields[i].name].length === 0) {
                    truth = false
                    break
                }
            }
        }
        _data['requiredFulfilled'] = truth
        this.setState({ data: _data })
    }

    fetchFields() {
        //Fetch fields from server, set state and set data to be the empty json of keys 
    }

    componentDidMount() {
        this.fetchFields()
    }

    render() {
        return (
            <div className="register">
                {this.state.section === 1 ? (
                    <section>
                        <p>
                            Please answer all questions honestly and to the full extent of your knowledge.
                            The Secretariat reserves the right to cancel your selection if any of your answers
                            are found to be deliberately false. <br /><br />
                            <h3>Instructions</h3>
                            Consider following definitions while filling the 'Category' column in the form <br /><br />
                            Domestic : Those participants who are residing and pursuing their education in India. <br />
                            NRI : Indian Citizens pursuing their educations in India. <br />
                            Foreign National : All delegates who do not hold Indian citizenship. <br /><br />
                            <h3>Registration Fee Details</h3>
                            Domestic : Rs. 1200 INR per delegate<br />
                            NRI and Foreign National : $85 USD per delegate <br /><br />
                            Processes Involved <br />
                            <ol>
                                <li>Registration rounds are opened by the secretariat.</li>
                                <li>Applicant fills the registration form.</li>
                                <li>Registration round gets over.</li>
                                <li>Allotments of positions are done by the secretariat to the qualified applicants.</li>
                                <li>Applicants get a time slab of 3 days to log in to their portals and make the payment. As an applicant makes the  payment,
            their respective seats get booked and the respective committee and position gets confirmed.</li>
                            </ol>
                        </p>
                        <Radio 
                            name="Category" 
                            options={['Domestic', 'NRI', 'Foreign National']} 
                            onChange={(event:any)=>{this.regInputHandler(event, this.state)}}
                        />
                        <Button 
                            color="primary" 
                            onClick={()=>{this.setState({section:2})}}
                        />
                    </section>
                ) : (
                this.state.section === 2? (
                    <section>
                        <h3>About You</h3>
                        <h4>Personal Details</h4>
                        
                    </section>
                ) : (
                this.state.section === 3 ? (<div></div>) : (
                                    <div></div>
                                )
                            )
                    )
                }
                <div className="container">
                    <div className="title">
                        <h1>Register</h1>
                    </div>
                </div>
                {this.state.fields.map(field => {
                    switch (field.type) {
                        case 'text': return (
                            <div>
                                <h3>{field.name}</h3>
                                <Textbox
                                    name={field.name}
                                    type="text"
                                    placeholder={field.placeholder}
                                    onChange={(event: any) => { this.regInputHandler(event, this.state) }}
                                />
                            </div>
                        )
                        case 'textarea': return (
                            <div>
                                <h3>{field.name}</h3>
                                <Textarea
                                    name={field.name}
                                    placeholder={field.placeholder}
                                    onChange={(event: any) => { this.regInputHandler(event, this.state) }}
                                />
                            </div>
                        )
                        case 'radio': return (
                            <div>
                                <h3>{field.name}</h3>
                                <Radio
                                    options={field.options != null ? field.options : []}
                                    name={field.name}
                                    onChange={(event: any) => { this.regInputHandler(event, this.state) }}
                                />
                            </div>
                        )
                        case 'check': return (
                            <div>
                                <h3>{field.name}</h3>
                                <Checkbox
                                    options={field.options != null ? field.options : []}
                                    name={field.name}
                                    onChange={(event: any) => { this.regInputHandler(event, this.state) }}
                                />
                            </div>
                        )
                        case 'number': return (
                            <div>
                                <h3>{field.name}</h3>
                                <Textbox
                                    name={field.name}
                                    type="number"
                                    placeholder={field.placeholder}
                                    onChange={(event: any) => { this.regInputHandler(event, this.state) }}
                                />
                            </div>
                        )
                    }
                    return (<div></div>)
                })}
                <Button color="primary" onClick={() => { }}>
                    Submit
                </Button>
            </div>
        )
    }

}