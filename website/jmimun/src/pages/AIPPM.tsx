import React, { Component } from 'react'
import './styles/committee.css'
import { Button } from '../components/Button'
import { APIService } from '../libs/api';
import AppContext from '../AppContext';

export default class AIPPM extends Component {
    state= {
        matrix: []
    }
    
    componentDidMount(){
        this.fetchMatrix();
    }

    fetchMatrix(){
        var API = new APIService()
        API.fetchMatrix('aippm').then((data)=>{
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
                        <h1>AIPPM</h1>
                    </div>
                </div>
                <div className="container">
                    <div className="content">
                        <p>
                            Indulge in unrestricted political discussion, deliberation and debate free from legislative functions. Take charge of how the Parliament works in your hands!
                            The All India Political Party Meet will provide a platform where diverse political personalities and perspectives will come together and join hands to work on issues of national importance.
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