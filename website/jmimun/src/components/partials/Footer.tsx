import React, { Component } from 'react'
import '../static/styles/partials/Footer.css'


export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="social">
                        <a href="https://www.facebook.com/jmimun"><img src="\img\icons\fb.png" width = "25px" alt="fb"/></a>
                        <a href="instagram.com/munjmi"><img src="\img\icons\insta.png" width = "25px"  alt="insta"/></a>
                        <br />
                        <br />
                       Jamia Millia Islamia Model UN Conference<br/>
                    </div>
                </div>
            </footer>
        )
    }
}