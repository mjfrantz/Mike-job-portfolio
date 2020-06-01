import React, { Component } from 'react';
import Isotope from 'isotope-layout/js/isotope';
import ImagesLoaded from 'imagesloaded/imagesloaded';

class ItemGrid extends Component {

    state = {
        activeItem: '*',
    }

    componentDidMount() {
        var imgLoad = new ImagesLoaded('.grid');

        imgLoad.on('progress', function (instance, image) {
            this.iso = new Isotope('.grid', {
                itemSelector: '.grid-item',
                layoutMode: "masonry"
            });
        });

    }
    onFilterChange = (newFilter) => {

        this.setState({ activeItem: newFilter });
        if (this.iso === undefined) {
            this.iso = new Isotope('.grid', {
                itemSelector: '.grid-item',
                layoutMode: "masonry"
            });
        }

        // this.iso.arrange({ filter: newFilter });

        if (newFilter === '*') {
            this.iso.arrange({ filter: `*` });
        } else {
            this.iso.arrange({ filter: `.${newFilter}` });
        }
    }

    onActive = v => v === this.state.activeItem ? 'active' : '';
    render() {
        return (
            <div>
                <ul className="list_style portfolio_menu text-center">
                    <li className={`${this.onActive('*')}`} data-wow-delay="0.1s" data-filter="*" onClick={() => { this.onFilterChange("*") }}>ALL</li>
                    <li className={`${this.onActive('ruby')}`} data-wow-delay="0.3s" data-filter="ruby" onClick={() => { this.onFilterChange("ruby") }}>Ruby on Rails</li>
                    <li className={`${this.onActive(`javascript`)}`} data-wow-delay="0.6s" data-filter="javascript" onClick={() => { this.onFilterChange("javascript") }}>JavaScript</li>
                </ul>

                <div className="grid row">
                    <div className="col-md-6 col-sm-6 col-xs-12 grid-item javascript">
                        <div className="portfolio hover-style">
                            <img src={require('../../image/portfolio/airpack.png')} alt="" />
                            <div className="item-img-overlay">
                                <div className="overlay-info text-center">
                                    <h3 className="sm-titl">AIRPACK</h3>
                                    <h6 className="sm-desc">An upcoming application that allows users to purchase 'Airpacks', which are packs of travel essentials they can order while traveling to a new country.</h6>
                                    <div className="icons">
                                        <a href="https://github.com/mjfrantz/airpack-node" target="_blank" rel="noopener noreferrer"><i className="icon_pencil"></i></a>
                                        <a href="https://www.airpack.io" target="_blank" rel="noopener noreferrer"><i className="icon_heart_alt"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12 grid-item ruby">
                        <div className="portfolio hover-style">
                            <img src={require('../../image/portfolio/speakItLive.png')} alt="" />
                            <div className="item-img-overlay">
                                <div className="overlay-info text-center">
                                    <h3 className="sm-titl">SPEAKIT-LIVE</h3>
                                    <h6 className="sm-desc">This application allows for foreign students to improve their english speaking skills in a classroom setting by having the students record their conversation and allowing teachers to listen in for any mistake.</h6>
                                    <div className="icons">
                                        <a href=".#"><i className="icon_pencil"></i></a>
                                        <a href=".#"><i className="icon-magnifying-glass"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12 grid-item javascript">
                        <div className="portfolio hover-style">
                            <img src={require('../../image/portfolio/Ustours.png')} alt="" />
                            <div className="item-img-overlay">
                                <div className="overlay-info text-center">
                                    <h6 className="sm-titl">US TOURS</h6>
                                    <div className="icons">
                                        {/* <a href=""><i className="icon_heart_alt"></i></a> */}
                                        <a href="https://www.natours.dev" target="_blank" rel="noopener noreferrer"><i className="icon-magnifying-glass"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ItemGrid;
