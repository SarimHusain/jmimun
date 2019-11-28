import React, { Component } from 'react'
import './styles/committee.css'
import { Button } from '../components/Button'
import { APIService } from '../libs/api';
import AppContext from '../AppContext';

export default class WTO extends Component {
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
        this.context.actions.appState({committee:"wto"})
        this.context.actions.router('/register')
    }
    render() {
        return (
            <article className="committee">
                <div className="container">
                    <div className="title">
                        <h1>WTO</h1>
                    </div>
                </div>
                <div className="container">
                    <div className="content">
                        <p>
                            The definition and use of trading over the years has changed drastically overtime. It is not just exchange of goods anymore, but also exchange of ideas.
                            World Trade Organization is the only global international organization dealing with the rules of trade between nations. The goal of WTO is to ensure that trade flows as smoothly, predictably and freely as possible.
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