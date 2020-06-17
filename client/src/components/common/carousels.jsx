import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./carousels.css";

class Carousels extends Component {
  state = {};
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="w-100"
            src={require("../../assets/img/subheaders/ad.jpg")}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="carouselTitle">News</h3>
            <p className="carouselDesc">It contain all the latest news.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="w-100"
            src={require("../../assets/img/subheaders/adm.jpg")}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="carouselTitle">Admission</h3>
            <p className="carouselDesc">
              It contain all the information related to admission.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="w-100"
            src={require("../../assets/img/subheaders/sc.jpg")}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="carouselTitle">Scholarships</h3>
            <p className="carouselDesc">
              It contain all the information related to scholarships.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="w-100"
            src={require("../../assets/img/subheaders/sc.jpg")}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="carouselTitle">Jobs</h3>
            <p className="carouselDesc">
              It contain all the information related to jobs.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="w-100"
            src={require("../../assets/img/subheaders/ad.jpg")}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="carouselTitle">Events</h3>
            <p className="carouselDesc">
              It contain all the information related to events.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Carousels;
