import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
class Footer extends Component {
  render() {
    let mikeData = this.props.mikeData;
    return (
      <section className="footer-area">
        <div className="container">
          <div className="footer-content">
            {/* <Link to=".#" className="logo wow fadeInDown" data-wow-delay="0.4s">
              <img src={require('../image/MJF9.png')} alt="" />
            </Link> */}
            {/* <Fade top cascade>
              <ul className="list_style">
                {
                  mikeData.socialLinks.map(item => {
                    return (
                      <li key={item.name}>
                        <a href={item.url}><i className={item.className}></i></a>
                      </li>
                    )
                  })
                }
              </ul>
            </Fade> */}
            <h6>Made with love by Michael J. Frantz</h6>
            <p>© Michael J. Frantz - All Rights Reserved</p>
          </div>
        </div>
      </section>
    )
  }
}
export default Footer;