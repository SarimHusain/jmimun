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
        this.context.actions.appState({committee:"ecosoc"})
        this.context.actions.router('/register')
    }
    render() {
        return (
            <article className="committee">
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
                <div className="container">
                    <div className="matrix">
                        <table className="matrix-table">
                            <tr>
                                <th className="name">Name</th>
                                <th className="availablity">Availablity</th>
                                <th className="availablity-marker"></th>
                            </tr>
                            {this.state.matrix.map((portfolio:any) => {
                                return (
                                    <tr>
                                        <td className="name"><h4>{portfolio.name}</h4></td>
                                        <td className="availablity">{portfolio.status}</td>
                                        <td><div className={
                                            portfolio.status === 'Booked' ? "availablity-marker red" : (portfolio.status === "Available" ? "availablity-marker green" : "availablity-marker orange")
                                        }></div></td>
                                    </tr>
                                )
                            })}
                        </table>
                    </div>
                </div>
            </article>
        )
    }
}