import React, { Component } from 'react'
import './styles/committee.css'
import { Button } from '../components/Button'
import { APIService } from '../libs/api';
import AppContext from '../AppContext';

export default class AU extends Component {
    state= {
        matrix: []
    }
    
    componentDidMount(){
        this.fetchMatrix();
    }

    fetchMatrix(){
        var API = new APIService()
        API.fetchMatrix('au').then((data)=>{
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
                        <h1>AU</h1>
                    </div>
                </div>
                <div className="container">
                    <div className="content">
                        <p>
                            AU is the most important regional intergovernmental organisation consisting of all 55 African states. It was founded in the South African city of Durban in 2002, as the successor to the Organisation of African Unity (OAU). The organisation aims to promote and maintain peace, security and stability in Africa. The regional integration process is to be accelerated and the living standards of all Africans enhanced. 
                            The AU promotes good governance and advocates a larger role for the African continent in the global trade. The AU Member States have given the organisation a far-reaching mandate to intervene in crises in order to prevent and end war crimes, genocide and serious crimes against humanity.
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