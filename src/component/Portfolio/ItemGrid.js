import React, { Component } from 'react';
import Isotope from 'isotope-layout/js/isotope';
import ImagesLoaded from 'imagesloaded/imagesloaded';
import { createClient } from 'contentful';


const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
})

class ItemGrid extends Component {

  state = {
    activeItem: '*',
    portfolios: []
  }

  async componentDidMount() {
    const entries = await client.getEntries()

    this.setState({
      portfolios: [...entries.items]
    })

    const imgLoad = new ImagesLoaded('.grid');

    imgLoad.on('progress', function (instance, image) {
      this.iso = new Isotope('.grid', {
        itemSelector: '.grid-item',
        layoutMode: "masonry"
      });
    });

  }
  onFilterChange = async (newFilter) => {


    const entries = await client.getEntries({
      'fields.technology': newFilter,
      content_type: 'portfolio'
    })


    this.setState({ portfolios: [...entries.items] });
  }

  render() {

    const { portfolios } = this.state;

    return (
      <div>
        <ul className="list_style portfolio_menu text-center">
          <li onClick={() => this.onFilterChange()}>ALL</li>
          <li onClick={() => this.onFilterChange("ruby")}>Ruby on Rails</li>
          <li onClick={() => this.onFilterChange("javascript")}>JavaScript</li>
        </ul>

        <div className="grid row">
          {portfolios.length ? portfolios.map(portfolio => (
            <div className="col-md-6 col-sm-6 col-xs-12 grid-item javascript" key={`${portfolio.fields.title + Date.now()}`}>
              <div className="portfolio hover-style">
                <img src={portfolio.fields.image.fields.file.url} alt="portfolio" />
                <div className="item-img-overlay">
                  <div className="overlay-info text-center">
                    <h3 className="sm-titl">{portfolio.fields.title}</h3>
                    <h6 className="sm-desc">{portfolio.fields.description}</h6>
                    <div className="icons">
                      <a href={portfolio.fields.websiteUrl} target="_blank" rel="noopener noreferrer"><i className="icon_heart_alt"></i></a>
                      <a href={portfolio.fields.githubUrl} target="_blank" rel="noopener noreferrer"><i className="icon_pencil"></i></a>
                    </div>
                  </div>
                </div>
              </div>

            </div>)

          ) : (<h4>No Portfolios Found</h4>)}
        </div>
      </div>
    )
  }
}

export default ItemGrid;


// this.setState({ activeItem: newFilter });
// 		if (this.iso === undefined) {
// 			this.iso = new Isotope('.grid', {
// 				itemSelector: '.grid-item',
// 				layoutMode: "masonry"
// 			});
// 		}

// 		// this.iso.arrange({ filter: newFilter });

// 		if (newFilter === '*') {
// 			this.iso.arrange({ filter: `*` });
// 		} else {
// 			this.iso.arrange({ filter: `.${newFilter}` });
// 		}