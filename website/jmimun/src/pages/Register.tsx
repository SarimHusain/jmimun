import React, { Component } from 'react'
import Button from '../components/Button'
import Radio from '../components/Radio'
import { Textbox, Textarea } from '../components/Textbox'
import './styles/Register.css'
import { APIService } from '../libs/api'
import Select from '../components/Select'


export default class Register extends Component {
    state = {
        required: ['category', 'name', 'instType', 'age', 'email', 'phone', 'accomodation', 'pref1', 'pref2'],
        data: {
            category: "",
            email: "",
            accomodation: "",
            pref1: "",
            pref2: "",
            pref3: "",
            experience: "",
            age: 0,
            instType: "",
            instType_other: "",
            munxp: "",
            passport: "",
            payment: "",
            requiredFulfilled: false,
            user: [{
                name: "",
                phone: "",
                email: ""
            }, {
                name: "",
                phone: "",
                email: ""
            }]
        },
        committeeSize: 2,
        matrix: ["Azim","Javed", "Azim", "Javed"],
        section : 1
    }

    fetchMatrix() {
        var API = new APIService()
        API.fetchMatrix('aippm').then((data) => {
            let _matrix = []
            for(let portfolio in data){
                _matrix.push(portfolio)
            }
            this.setState({ matrix: _matrix })
        })
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
        else if (event.target.type === 'text' || event.target.type === 'textarea' || event.target.type === 'email' || event.target.type ==='select-one') {
            if (event.target.name.includes('/')) {
                let parentKey = event.target.name.split('/')[0]
                let index = parseInt(event.target.name.split('/')[1].split('#')[0], 10)
                let childKey = event.target.name.split('#')[1]
                _data[parentKey][index - 1][childKey] = event.target.value
            } else
                _data[event.target.name] = event.target.value
        }
        var truth: boolean = true
        for (let i = 0; i < state.required.length; i++) {
            if (state.data[state.required[i]] === '') {
                truth = false
                break
            }
        }
        _data['requiredFulfilled'] = truth
        this.setState({ data: _data }, ()=>{console.log(this.state)})
    }

    componentDidMount() {

    }
    changeSection = () => {
        if(this.state.section!==4){
            this.setState({section:this.state.section+1})
        }
    }
    validate() {
        if (this.state.data.payment === " No") {
            this.setState({ "error": "Please agree to the payment terms" })
        }
        else if (!this.state.data.requiredFulfilled) {
            this.setState({ "error": "Please fill in all the fields" })
        }
        else {
            //send to the server
        }
    }
    render() {
        return (
            <div className="register">
                <div className="container">
                    <div className="title">
                        <h1>Register</h1>
                    </div>
                </div>
                <div className="container">
                    {
                    this.state.section === 1 ? 
                        (
                        <section>
                            <p>
                            Please answer all questions honestly and to the full extent of your knowledge.
                            The Secretariat reserves the right to cancel your selection if any of your answers
                            are found to be deliberately false. <br /><br />
                            <h2>Instructions</h2>
                            Consider following definitions while filling the 'Category' column in the form <br /><br />
                            Domestic : Those participants who are residing and pursuing their education in India. <br />
                            NRI : Indian Citizens pursuing their educations in India. <br />
                            Foreign National : All delegates who do not hold Indian citizenship. <br /><br />
                            <h2>Registration Fee Details</h2>
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
                        <h3>Category</h3>
                        <Radio
                            name="category"
                            options={['Domestic', 'NRI', 'Foreign National']}
                            onChange={(event: any) => { this.regInputHandler(event, this.state) }}
                        />
                        <br />
                        <Button color="primary" onClick = {()=>{this.changeSection()}}>Next</Button>
                        </section>
                        ):(
                    this.state.section===2 ? 
                        (
                        <section>
                            <h2>About You</h2>
                        <h3>Personal Details</h3>
                        {this.state.committeeSize === 2 ? (<p style={{ "fontSize": "1.2em", "color": "#007fb9" }}>Delegate 1</p>) : (<div></div>)}
                        <Textbox
                            name="user/1#name"
                            placeholder="Name"
                            type="text"
                            onChange={(event: any) => { this.regInputHandler(event, this.state) }}
                            validation={(event: any) => { if (event.target.value !== '') return true }}
                            validationErrorHelptext="This field is required"
                        />
                        <Textbox
                            name="user/1#age"
                            type="number"
                            placeholder="Age"
                            onChange={(event: any) => { this.regInputHandler(event, this.state) }}
                            validation={(event: any) => { if (event.target.value !== '') return true }}
                            validationErrorHelptext="This field is required"
                        />
                        <Textbox
                            name="user/1#email"
                            type="email"
                            placeholder="Email"
                            onChange={(event: any) => { this.regInputHandler(event, this.state) }}
                            validation={(event: any) => { if (event.target.value !== '') return true }}
                            validationErrorHelptext="This field is required"
                        />
                        <Textbox
                            name="user/1#phone"
                            type="phone"
                            placeholder="Phone"
                            onChange={(event: any) => { this.regInputHandler(event, this.state) }}
                            validation={(event: any) => { if (event.target.value !== '') return true }}
                            validationErrorHelptext="This field is required"
                        />
                        <Textbox
                            name="user/1#institution"
                            placeholder="Institution"
                            type="text"
                            onChange={(event: any) => { this.regInputHandler(event, this.state) }}
                            validation={(event: any) => { if (event.target.value !== '') return true }}
                            validationErrorHelptext="This field is required"
                        />
                        <p style={{ "fontSize": "1.3em" }}>Type of Institution</p>
                        <Radio
                            name="user/1#instType"
                            options={['School', 'College', 'University', 'Other']}
                            onChange={(event: any) => { this.regInputHandler(event, this.state) }}
                        />
                        {this.state.data.instType === 'Other' ?
                            (<Textbox
                                name="user/1#instType_other"
                                type="text"
                                placeholder="Please specify"
                                onChange={(event: any) => { this.regInputHandler(event, this.state) }}
                            />) : (<div></div>)}
                        <p style={{ "fontSize": "1.3em" }}>Do you require accomodation?</p>
                        <Radio
                            name="user/1#accomodation"
                            options={['Yes', 'No']}
                            onChange={(event: any) => { this.regInputHandler(event, this.state) }}
                        />
                        {this.state.data.category !== 'Domestic' ? (<Textbox
                            name="passport"
                            type="text"
                            placeholder="Passport"
                            onChange={(event: any) => { this.regInputHandler(event, this.state) }}
                        />
                        ) : (<div></div>)}
                        {this.state.committeeSize === 2 ? (
                            <div>
                                <p style={{ "fontSize": "1.2em", "color": "#007fb9" }}>Delegate 2</p>
                                <Textbox
                                    name="user/2#name"
                                    placeholder="Name"
                                    type="text"
                                    onChange={(event: any) => { this.regInputHandler(event, this.state) }}
                                    validation={(event: any) => { if (event.target.value !== '') return true }}
                                    validationErrorHelptext="This field is required"
                                />
                                <Textbox
                                    name="user/2#age"
                                    type="number"
                                    placeholder="Age"
                                    onChange={(event: any) => { this.regInputHandler(event, this.state) }}
                                    validation={(event: any) => { if (event.target.value !== '') return true }}
                                    validationErrorHelptext="This field is required"
                                />
                                <Textbox
                                    name="user/2#email"
                                    type="email"
                                    placeholder="Email"
                                    onChange={(event: any) => { this.regInputHandler(event, this.state) }}
                                    validation={(event: any) => { if (event.target.value !== '') return true }}
                                    validationErrorHelptext="This field is required"
                                />
                                <Textbox
                                    name="user/2#phone"
                                    type="phone"
                                    placeholder="Phone"
                                    onChange={(event: any) => { this.regInputHandler(event, this.state) }}
                                    validation={(event: any) => { if (event.target.value !== '') return true }}
                                    validationErrorHelptext="This field is required"
                                />
                                <Textbox
                                    name="user/2#institution"
                                    placeholder="Institution"
                                    type="text"
                                    onChange={(event: any) => { this.regInputHandler(event, this.state) }}
                                    validation={(event: any) => { if (event.target.value !== '') return true }}
                                    validationErrorHelptext="This field is required"
                                />
                                <p style={{ "fontSize": "1.3em" }}>Type of Institution</p>
                                <Radio
                                    name="user/2#instType"
                                    options={['School', 'College', 'University', 'Other']}
                                    onChange={(event: any) => { this.regInputHandler(event, this.state) }}
                                />
                                {this.state.data.instType === 'Other' ?
                                    (<Textbox
                                        name="user/2#instType_other"
                                        type="text"
                                        placeholder="Please specify"
                                        onChange={(event: any) => { this.regInputHandler(event, this.state) }}
                                    />) : (<div></div>)}
                                <p style={{ "fontSize": "1.3em" }}>Do you require accomodation?</p>
                                <Radio
                                    name="user/1#accomodation"
                                    options={['Yes', 'No']}
                                    onChange={(event: any) => { this.regInputHandler(event, this.state) }}
                                />
                                {this.state.data.category !== 'Domestic' ? (<Textbox
                                    name="passport"
                                    type="text"
                                    placeholder="Passport"
                                    onChange={(event: any) => { this.regInputHandler(event, this.state) }}
                                />) : (<div></div>)}
                                <Button color="primary" onClick = {()=>{this.changeSection()}}>Next</Button>
                            </div>
                        ) : (
                                <div></div>
                            )}
                        </section>
                        ):(
                        this.state.section===3 ?
                        (
                            <section>
                                <h2 className="blue">Preferences</h2>
                        <Textarea
                            name="munxp"
                            placeholder="Your MUN Experience"
                            onChange={(event: any) => { this.regInputHandler(event, this.state) }}
                            validation={(event: any) => { if (event.target.value !== '') return true }}
                            validationErrorHelptext="This field is required"
                        />
                        <p>This will help us allot you a portfolio appropriate to your experience. Please enter the number of MUNs you have been a part of.</p>
                        <p style={{ "fontSize": "1.2em", "color": "#007fb9" }}>Please enter your preferences</p>
                        <p>Preference 1</p>
                        <Select
                            name="pref1"
                            onChange={(event: any) => { this.regInputHandler(event, this.state) }}
                            options={this.state.matrix}
                        />
                        <p>Preference 2</p>
                        <Select
                            name="pref2"
                            onChange={(event: any) => { this.regInputHandler(event, this.state) }}
                            options={this.state.matrix}
                        />
                        <p>Preference 3</p>
                        <Select
                            name="pref3"
                            onChange={(event: any) => { this.regInputHandler(event, this.state) }}
                            options={this.state.matrix}
                        />
                        <Button color="primary" onClick = {()=>{this.changeSection()}}>Next</Button>
                            </section>
                        ):(
                        <section>
                            <h2 className="blue">Payment</h2>
                        <p>
                            There is a basic registration of Rs. 1200 INR per delegate(For Domestic Delegates) and $ 85 USD per delegate(For NRI and Foreign national categories).<br />
                            You will be required to check your allotment on the website, jmimun.org. You will also be sent an email containing this information. <br />
                            You are expected to complete the payment after your allotment. Your alloted position will be re-alloted to other delegates, in case you fail to make the payment.<br />
                        </p>
                        <p style={{ "fontSize": "1.2em", "color": "#007fb9" }}>Do you agree to the terms of payment?</p>
                        <Radio
                            name="payment"
                            options={['Yes', 'No']}
                            onChange={(event: any) => { this.regInputHandler(event, this.state) }}
                        />
                        <Button color="primary" onClick = {()=>{this.changeSection()}}>Next</Button>
                        </section>
                        )
                    ))}
                    </div>
                    </div>
        )
    }

}