import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Fade, Reveal } from 'react-reveal/';

class About extends Component {
  render() {
    const { aClass } = this.props;

    let mikeData = this.props.mikeData;

    const handlePDFOpen = () => {
      window.open('./money.pdf', '_blank', 'fullscreen=yes')
    }

    return (
      <section className={`${aClass}`} id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 d-flex align-items-center">
              <Fade bottom cascade duration={2000}>
                <div className="about_content">
                  <h2 className="t_color">{mikeData.aboutme}</h2>
                  <h6>{mikeData.role}</h6>
                  <p>{mikeData.aboutdetails}</p>
                  <button className="theme_btn active" onClick={handlePDFOpen}>Resume</button>
                  <a href="https://www.linkedin.com/in/mjfrantz/" target="_blank" rel="noopener noreferrer" className="theme_btn active">Linkedin</a>
                </div>
              </Fade>
            </div>
            <div className="col-lg-5">
              <div className="about_img">
                <Reveal effect="fadeInRight" duration={1500}><img src={require('../image/Me.png')} alt="" /></Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default About;
