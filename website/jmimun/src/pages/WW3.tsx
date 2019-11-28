import React, { Component } from 'react'
import './styles/committee.css'
import { Button } from '../components/Button'
import {APIService} from '../libs/api'
import AppContext from '../AppContext'

export default class WW3 extends Component {
    state= {
        matrix: []
    }
    
    componentDidMount(){
        this.fetchMatrix();
    }

    fetchMatrix(){
        var API = new APIService()
        API.fetchMatrix('ww3').then((data)=>{
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
                        <h1>WW3</h1>
                    </div>
                </div>
                <div className="container">
                    <div className="content">
                        <p>
                        The Third World War (WW3) is the name given to a hypothetical third worldwide large-scale military conflict subsequent to World War I and World War II. 
                        The term has been in use since at least as early as 1941. 
                        Some have applied it loosely to refer to limited or smaller conflicts such as the Cold War or the War on Terror, while others assumed that such a conflict would surpass prior world wars both in its scope and in its destructive impact.
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