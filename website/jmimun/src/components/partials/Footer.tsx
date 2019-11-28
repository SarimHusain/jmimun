import React, { Component } from 'react'
import '../static/styles/partials/Footer.css'


export default class Footer extends Component {
    render() {
        return (
            <footer>
            <div className="social">
                <a>
                <img src="/img/icons/fb.png" width="25px" alt=""/>
                </a>
                <a>
                <img src="/img/icons/insta.png" width="25px" alt=""/>
                </a>
              <h3>Social Links</h3>
              <b>Jamia Millia Islamia Model UN conference</b>
            </div>
            <br/><br/>
            {/* <Link to={'/terms'}>Terms and Conditions</Link> */}
          </footer>
        )
    }
}