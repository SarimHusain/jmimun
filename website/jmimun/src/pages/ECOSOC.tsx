import React, { Component } from 'react'
import './styles/committee.css'
import { Button } from '../components/Button'
import { APIService } from '../libs/api';
import AppContext from '../AppContext';

export default class ECOSOC extends Component {
    state= {
        matrix: []
    }
    
    componentDidMount(){
        this.fetchMatrix();
    }

    fetchMatrix(){
        var API = new APIService()
        API.fetchMatrix('ecosoc').then((data)=>{
            this.setState({matrix: data})
        })
    }
    static contextType = AppContext
    context!: React.ContextType<typeof AppContext>
    
    routeToRegister(){
        this.context.actions.appState({committee:"unga"})
        this.context.actions.router('/register')
    }
    render() {
        return (
            <div className="committee">
                <div className="container">
                    <div className="title">
                        <h1>ECOSOC</h1>
                    </div>
                </div>
                <div className="container">
                    <div className="content">
                        <p>
                        Economic and Social Council (ECOSOC) is the United Nations’ central platform for reflection, debate, and innovative thinking on sustainable development. ECOSOC engages a wide variety of stakeholders – in a productive dialogue on sustainable development through a programmatic cycle of meetings. The work of the Council is guided by an issue-based approach, and there is an annual theme that accompanies each programmatic cycle, ensuring a sustained and focused discussion among multiple stakeholders.
                        </p>
                        <Button color="primary" size="medium" onClick={()=>{}}>
                            Register
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}