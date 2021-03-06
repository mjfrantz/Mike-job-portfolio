import React, { Component } from 'react';
import Reveal from 'react-reveal/Reveal/';
import WaterWave from 'react-water-wave';

class Banner extends Component {
  render() {
    let mikeData = this.props.mikeData;
    let { bClass, textLeft, imag } = this.props;
    return (
      <section id="home" >
        <WaterWave perturbance={0.0025} className={`banner_area ${bClass}`} style={{ width: '100%', height: '100%', backgroundSize: 'cover' }} imageUrl={require("../../image/" + imag)}>
          {({ getRootProps }) => (
            <div className="container">
              <div className={`banner_content ${textLeft}`}>
                <Reveal effect="fadeInUp">
                  <h5>Hello,</h5>
                </Reveal>
                <Reveal effect="fadeInUp" duration={1000}><h2 className="wow fadeInLeft animated">I am {mikeData.name}</h2></Reveal>
                <Reveal effect="fadeInUp" duration={1500}><h4 className="wow fadeInUp animated">Fullstack Web Developer</h4></Reveal>
                <ul className="list_style social_icon">
                  {
                    mikeData.socialLinks && mikeData.socialLinks.map(item => {
                      return (
                        <li key={item.name}>
                          <a href={item.url}>
                            <i className={item.className}>
                            </i>
                          </a>
                        </li>
                      )
                    }
                    )
                  }
                </ul>
              </div>
            </div>
          )}
        </WaterWave>
      </section>
    );
  }
}

export default Banner;