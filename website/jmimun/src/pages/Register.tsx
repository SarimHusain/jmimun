import React, { Component } from 'react'
import Checkbox from '../components/Checkbox'
import Radio from '../components/Radio'
import {Textbox, Textarea} from '../components/Textbox'
import './styles/Register.css'

interface RegisterProps {
    committee: string
}

export default class Register extends Component{
    state = {
        fields : [ 
                    {"name": "name", "type": "text", "required": true, "placeholder": "Name"}, 
                    {"name": "experience", "type": "textarea", "placeholder": "Experience", "required": true}, 
                    {"name": "age", "type": "number", "placeholder": "Age", "required": true},
                    {"name": "Choice", "type": "radio", "options": ["op1", "op2", "op3", "op4"]},
                    {"name": "SelectAll", "type": "check", "required":true, "options": ["op1", "op2", "op3", "op4"]}  
                ],
        data: {
            "name": "",
            "experience": "",
            "age": 0,
            "Choice": "",
            "SelectAll": []
        }
    }

    regInputHandler(event:any, state:any){
        var _data = state.data
        if(event.target.type==='checkbox'){
            if(event.target.checked){
                if(_data[event.target.name]==null) _data[event.target.name] = []
                _data[event.target.name].push(event.target.value)
            } else {
                _data[event.target.name].pop(event.target.value)
            }
        }
        else if(event.target.type==='radio'){
            _data[event.target.name] = event.target.value
        }
        else if(event.target.type==='text' || event.target.type==='textarea'){
            _data[event.target.name] = event.target.value
        }
        var truth:boolean = true
        for(let i=0 ; i<state.fields.length; i++){
            if(state.fields[i].required){
                if(_data[state.fields[i].name].length===0){
                    truth = false
                    break
                }
            }
        }
        _data['requiredFulfilled'] = truth
        this.setState({data: _data})
    }

    fetchFields(){
        //Fetch fields from server, set state and set data to be the empty json of keys 
    }
    
    componentDidMount(){
        this.fetchFields()
    }
 
    render() {
        return (
            <div className="register">
                <div className="container">
                    <div className="title">
                        <h1>Register</h1>
                    </div>
                </div>
                {this.state.fields.map(field => {
                    switch(field.type){
                        case 'text': return  (
                                                    <div>
                                                        <h3>{field.name}</h3>
                                                        <Textbox 
                                                            name={field.name}
                                                            type="text" 
                                                            placeholder={field.placeholder}
                                                            onChange = {(event:any)=>{this.regInputHandler(event, this.state)}}
                                                        />
                                                    </div>
                                            )
                        case 'textarea': return (
                                                    <div>   
                                                        <h3>{field.name}</h3>
                                                        <Textarea
                                                            name={field.name}
                                                            placeholder = {field.placeholder}
                                                            onChange = {(event:any)=>{this.regInputHandler(event, this.state)}}
                                                        />
                                                    </div>
                                                )
                        case 'radio': return (
                                                    <div>
                                                        <h3>{field.name}</h3>
                                                        <Radio
                                                            options={field.options!=null? field.options: []}
                                                            name={field.name}
                                                            onChange = {(event:any)=>{this.regInputHandler(event, this.state)}}
                                                        />
                                                    </div>
                                            )
                        case 'check': return (
                                                    <div>
                                                        <h3>{field.name}</h3>
                                                        <Checkbox 
                                                            options={field.options!=null? field.options: []}
                                                            name={field.name}
                                                            onChange = {(event:any)=>{this.regInputHandler(event, this.state)}}
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
                                                    onChange = {(event:any)=>{this.regInputHandler(event, this.state)}}
                                                />
                                                </div>
                                            )
                    }
                    return (<div></div>)
                })}
            </div>
        )
    }

}