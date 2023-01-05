import React, { Component } from "react";
import "./PosterCard.css";

export default class PosterCard extends Component {
  constructor(props) {
    super(props);
    this.checkbox = React.createRef();
    this.state = {
      checked: true,
    };
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <div className="section over-hide">
          <div className="container">
            <div className="row full-height justify-content-center">
              <div className="col-12 text-center align-self-center py-5">
                <div className="section text-center py-5 py-md-0">
                  <input
                    className="hidden pricing"
                    type="checkbox"
                    id="pricing"
                    name="pricing"
                  />
                  <div
                    className="card-3d-wrap mx-auto"
                    onMouseEnter={() => {
                      document.getElementsByClassName("pricing")[
                        this.props.id
                      ].checked = true;
                    }}
                    onMouseLeave={() => {
                      document.getElementsByClassName("pricing")[
                        this.props.id
                      ].checked = false;
                    }}
                  >
                    <div className="card-3d-wrapper">
                      <div className="card-front ">
                        <div className="pricing-wrap">
                          <h4 className="mb-5">{this.props.price}</h4>
                          <h2 className="mb-2">{this.props.name}</h2>
                          <p className="mb-4 p-4">{this.props.tagline}</p>
                          <p className="mb-1">
                            <i className="uil uil-location-pin-alt size-22"></i>
                          </p>
                          <p className="mb-4">Drina, Serbia</p>
                          {/* <div className="img-wrap img-2">
                            <img
                              src="https://assets.codepen.io/1462889/sea.png"
                              alt=""
                            />
                          </div> */}
                          <div className="img-wrap img-1 ">
                            <img
                              src={this.props.front1}
                              alt=""
                              className="max-h-56 object-contain"
                            />
                          </div>
                          <div className="img-wrap img-6">
                            <img src={this.props.front2} alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="card-back">
                        <div className="pricing-wrap">
                          <h4 className="mb-5">Camping</h4>
                          <h2 className="mb-2">
                            <sup>$</sup>29 / 8<sup>hrs</sup>
                          </h2>
                          <p className="mb-4">per person</p>
                          <p className="mb-1">
                            <i className="uil uil-location-pin-alt size-22"></i>
                          </p>
                          <p className="mb-4">Tara, Serbia</p>
                          <div className="img-wrap img-2 -left-10">
                            <img src={this.props.back1} alt="" />
                          </div>
                          <div className="img-wrap img-7">
                            <img src={this.props.back2} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
