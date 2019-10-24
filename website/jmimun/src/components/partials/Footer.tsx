import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../static/partials/Footer.css'


export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="flex-container">
                    <div><div>
                        <ul>Jamia Millia Islamia MUN 2019</ul>

                    </div>
                        <div>
                            <small>Jamia Millia Islamia, Jamia Nagar</small>
                        </div>
                        <div>
                            <small>New Delhi - 110025</small>
                        </div>
                        <div>
                            <small>25<sup>th</sup> December 2019</small>
                        </div>
                    </div>
                    <div>
                        <div className="heading3">FAQs:</div>
                        <div>
                            <a href="https://www.jmimun.net/">Committees?</a><br />
                            <a href="https://www.jmimun.net/apply">Where do I register?</a><br />
                            <a href = "https://www.jmimun.net/contact">Need Further help...</a>
                        </div>
                    </div>
                    <div>
                        <div className="social">
                        <a href="https://www.facebook.com/jmimun"><img src="components\static\img\icons\fb.png" alt="fb"></img></a>
                        <a href="instagram.com/munjmi"><img alt="insta"></img></a>
                        <a href="mailto:helpdesk@jmimun.com"><img alt="mail "></img></a>
                        <br/>
                        <br/>
                        <div className="heading3"> &copy;Jamia Millia Islamia Model UN Conference<br /></div>
                        Website built and maintained by Azim Javed
                        </div></div>
                </div>
            </footer>
        )
    }
}