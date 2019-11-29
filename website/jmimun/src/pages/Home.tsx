import React, { Component } from 'react'
import './styles/Home.css'
import AppContext from '../AppContext'
import Button from '../components/Button'


export default class Home extends Component {
    render() {
        return (
            <article className="home">
                <div className="container" 
                    style={{ 
                        height: "45em", flexFlow: "column",
                        // backgroundColor: "#00b6f1"
                    }}
                >
                    <h1>Discern | Discuss | Debate</h1>
                    <h3>15<sup>th</sup> and 16<sup>th</sup> February</h3>
                    <div className="padding"></div>
                    <AppContext.Consumer>
                        {
                            appContext => (
                                <Button color="primary"
                                    onClick={() => {
                                        appContext.actions.router('/committees')
                                    }}>
                                    Apply
                                </Button>
                            )
                        }
                    </AppContext.Consumer>
                </div>

                <div className="container" style={{ "height": "35em" }}>
                    <section className="logo">
                        <img src="/img/home/jmilogo-black.png" width="50%" alt="" />
                    </section>
                    <section className="content">
                        <h2 className="blue">JMI Model United Nations</h2>
                        <p>
                            Welcome to the third edition of
                            Jamia Millia Islamia's Model United Nations Conference
                            to be held on 15th and 16th February, 2020.
                            <br/><br/>
                            True to the spirit of the United Nations organization, 
                            The JMIMUN conference, strives to foster a forum for constructive open dialogue on complex global issues, 
                            including international peace, security, economic and social progress. 
            </p>
                    </section>
                </div>

            </article>
        )
    }
}