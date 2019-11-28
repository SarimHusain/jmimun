import React, { Component } from 'react'
import './styles/Home.css'


export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="container">
                    <div className="home-content">
                        <div className="jmilogo">
                            <img src="/img/home/jmilogo-black.png" alt=""/>
                        </div>
                        <div className="jmimun">
                            <img src="/img/home/jmimun-home.png" alt=""/>
                        </div>
                    </div>
                    <div className="date">
                        <p className="date-text">
                            5<sup>th</sup> and 6<sup>th</sup>Februrary
                        </p>
                    </div>
                </div>
                <div className="container">
                    <div className="messages">
                        <div className="message blue">
                            <div className="img-container">
                                <img className="message-img" src="/img/messages/vc.webp" alt=""></img>
                            </div>
                            <div className="message-text">
                                <h2 className="message-head">A Message from the <br />Vice Chancellor</h2>
                                {/* Make message-head flash onShow*/}
                                <p>It gives me immense pleasure to know that Jamia Millia Islamia students are hosting the Model United Nations at Jamia Millia Islamia.
                                I welcome all delegates from India and abroad, and also the International Press.
                                Through this international conference, the organizing committee has come up with the slogan "Discuss Discern Debate" and continuing the effort.
                                I hope they are able to raise the bar.
                                I understand and appreciate Center for Innovation and Entrepreneurship (CIE) for their deep efforts in organizing JMI MUN.
                                I hope that this MUN helps to spread the message of peace, brotherhood and equality among all the participants, and through them at world stage.
                                And also it will help Jamia Millia Islamia to portray an infinite and diverse environment image of the university at the world level in front of eminent delegates who are coming to Jamia Millia Islamia for attending the international Model United Nation conference.
                                And my best wishes goes with the team of JMI MUN.
                                </p>
                            </div>

                        </div>
                        <div className="message white">
                            <div className="message-text">
                                <h2 className="message-head">A Message from the <br />Vice Chancellor</h2>
                                <p>It gives me immense pleasure to know that Jamia Millia Islamia students are hosting the Model United Nations at Jamia Millia Islamia.
                                I welcome all delegates from India and abroad, and also the International Press.
                                Through this international conference, the organizing committee has come up with the slogan "Discuss Discern Debate" and continuing the effort.
                                I hope they are able to raise the bar.
                                I understand and appreciate Center for Innovation and Entrepreneurship (CIE) for their deep efforts in organizing JMI MUN.
                                I hope that this MUN helps to spread the message of peace, brotherhood and equality among all the participants, and through them at world stage.
                                And also it will help Jamia Millia Islamia to portray an infinite and diverse environment image of the university at the world level in front of eminent delegates who are coming to Jamia Millia Islamia for attending the international Model United Nation conference.
                                And my best wishes goes with the team of JMI MUN.
                                </p>
                            </div>
                            <div className="img-container">
                                <img className="message-img" src="/img/messages/vc.webp" alt=""></img>
                            </div>
                        </div>
                        <div className="message black">
                            <div className="img-container">
                                <img className="message-img" src="/img/messages/vc.webp" alt=""></img>
                            </div>
                            <div className="message-text">
                                <h2 className="message-head">A Message from the <br />Vice Chancellor</h2>
                                <p>It gives me immense pleasure to know that Jamia Millia Islamia students are hosting the Model United Nations at Jamia Millia Islamia.
                                I welcome all delegates from India and abroad, and also the International Press.
                                Through this international conference, the organizing committee has come up with the slogan "Discuss Discern Debate" and continuing the effort.
                                I hope they are able to raise the bar.
                                I understand and appreciate Center for Innovation and Entrepreneurship (CIE) for their deep efforts in organizing JMI MUN.
                                I hope that this MUN helps to spread the message of peace, brotherhood and equality among all the participants, and through them at world stage.
                                And also it will help Jamia Millia Islamia to portray an infinite and diverse environment image of the university at the world level in front of eminent delegates who are coming to Jamia Millia Islamia for attending the international Model United Nation conference.
                                And my best wishes goes with the team of JMI MUN.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}