import React, { Component } from 'react'
import './styles/committee.css'
import { Button } from '../components/Button'
import { APIService } from '../libs/api';

export default class UNSC extends Component {
    state= {
        matrix: []
    }
    
    componentDidMount(){
        this.fetchMatrix();
    }

    fetchMatrix(){
        var API = new APIService()
        API.fetchMatrix('unsc').then((data)=>{
            this.setState({matrix: data})
        })
    }
    render() {
        return (
            <div className="committee">
                <div className="container">
                    <div className="title">
                        <h1>UNSC</h1>
                    </div>
                </div>
                <div className="container">
                    <div className="content">
                        <p>
                        The Security Council has primary responsibility for maintaining international peace and security. When the Council considers a threat to international peace, it finds out ways to settle the dispute peacefully. 
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