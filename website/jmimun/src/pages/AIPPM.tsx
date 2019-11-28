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
        this.context.actions.appState({committee:"aippm"})
        this.context.actions.router('/register')
    }
    render() {
        return (
            <article className="committee">
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