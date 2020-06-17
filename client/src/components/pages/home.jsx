import React, { Component } from "react";
import { Link } from "react-router-dom";
import Carousels from "./../common/carousels";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <Carousels />
        <div className="row landing-page-section-lighter pb-2">
          <div className="col-6">
            <h1>Newsbuzz</h1>
            <p className="text-justify">
              Newsbuzz app target for student user and show them all the news at
              one platform, the Newsbuzz app contains everything you expect from
              a news app — breaking news , scholarships, admission, jobs and
              events — but it’s also got a few features you won’t find on other
              apps. you can search news by selecting category of news
            </p>
            <Link to="/billing" className="btn btn-cz disabled">
              Newsbuzz
            </Link>
          </div>
          <div className="col-6 align-self-center justify-content-center text-center">
            <img
              src={require("../../assets/icons/icon-billing.svg")}
              width="220px"
              alt=""
            />
          </div>
        </div>
        <div className="row landing-page-section-darker pb-2">
          <div className="col-6 align-self-center justify-content-center text-center">
            <img
              src={require("../../assets/icons/icon-forum.svg")}
              width="220px"
              alt=""
            />
          </div>
          <div className="col-6">
            <h1>News</h1>
            <p className="text-justify">
              It is information about current events. Common topics for news
              reports include Latest, Business, Sports, Technology and World as
              well as athletic events, quirky or unusual events. It is newly
              received or noteworthy information, especially about recent events
            </p>
            <Link to="/forum" className="btn btn-cz disabled">
              News
            </Link>
          </div>
        </div>
        <div className="row landing-page-section-lighter pb-2">
          <div className="col-6">
            <h1>Admission</h1>
            <p className="text-justify">
              It is the Information about different admissions.It contains all
              the admission releated to graduate and undergraduate universities
              across all the cities in pakistan scrapped from different
              websites.So that student can easily find admission offered by
              different universities.
            </p>
            <Link to="/complaint" className="btn btn-cz disabled">
              Admission
            </Link>
          </div>
          <div className="col-6 align-self-center justify-content-center text-center">
            <img
              src={require("../../assets/icons/icon-complain.svg")}
              width="220px"
              alt=""
            />
          </div>
        </div>
        <div className="row landing-page-section-darker pb-2">
          <div className="col-6 align-self-center justify-content-center text-center">
            <img
              src={require("../../assets/icons/icon-fundraising.svg")}
              alt=""
              width="220px"
            />
          </div>
          <div className="col-6">
            <h1>Scholarships</h1>
            <p className="text-justify">
              It is the Information about different scholarships.It contains all
              the scholarships releated to local and international universities
              across all the cities in pakistan.So that student can easily find
              scholarships offered by different universities.
            </p>
            <Link to="/fundraising" className="btn btn-cz disabled">
              Scholarships
            </Link>
          </div>
        </div>
        <div className="row landing-page-section-lighter pb-2">
          <div className="col-6">
            <h1>Jobs</h1>
            <p className="text-justify">
              It is the Information about different Jobs.It contains different
              type of jobs across different cities in pakistan.So the students
              that were graduated will easily serach jobs in this app
            </p>
            <Link to="/facility-corner" className="btn btn-cz disabled">
              Jobs
            </Link>
          </div>
          <div className="col-6 align-self-center justify-content-center text-center">
            <img
              src={require("../../assets/icons/icon-facility.svg")}
              width="220px"
              alt=""
            />
          </div>
        </div>
        <div className="row landing-page-section-darker pb-2">
          <div className="col-6 align-self-center justify-content-center text-center">
            <img
              src={require("../../assets/icons/icon-tracking.svg")}
              width="220px"
              alt=""
            />
          </div>
          <div className="col-6">
            <h1>Event</h1>
            <p className="text-justify">
              It contains all the events register by users and displayed it on
              our application it provide a platform where user can make
              publicity of there event without any cost.
            </p>
            <Link to="/garbage-tracking" className="btn btn-cz disabled">
              Event
            </Link>
          </div>
        </div>
        {/*  <div className="row landing-page-section-lighter">
          <div className="col-6">
            <h1>Security System</h1>
            <p className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              sollicitudin ante nisl, in feugiat odio rutrum at. Duis et lacus
              sit amet risus sollicitudin tristique sed vitae metus. Vestibulum
              ultricies ligula vitae porta blandit. Vestibulum porta arcu sed
              lectus aliquam eleifend. Fusce sagittis eget elit non euismod.
              Donec eu metus dictum, tempus odio nec, cursus eros. Interdum et
              malesuada fames ac ante ipsum primis in faucibus. Fusce tempor
              finibus magna. Nunc pharetra lectus at turpis consequat, nec
              porttitor felis porta. Fusce nec quam fermentum, cursus mauris ac,
              sollicitudin dui. Pellentesque eget gravida nisl. Nunc quis mi
              rutrum, ornare leo eu, cursus ex. Vivamus congue sapien eget urna
              auctor euismod. Aenean id nisi in odio pretium maximus.
            </p>
            <Link to="/security" className="btn btn-cz disabled">
              Send Security Notification
            </Link>
          </div>
          <div className="col-6 align-self-center justify-content-center text-center">
            <img src={require("../../assets/icons/icon-facility.svg")} alt="" />
          </div>
        </div>
        <div className="row landing-page-section-darker">
          <div className="col-6 align-self-center justify-content-center text-center">
            <img src={require("../../assets/icons/icon-facility.svg")} alt="" />
          </div>
          <div className="col-6">
            <h1>Election System</h1>
            <p className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              sollicitudin ante nisl, in feugiat odio rutrum at. Duis et lacus
              sit amet risus sollicitudin tristique sed vitae metus. Vestibulum
              ultricies ligula vitae porta blandit. Vestibulum porta arcu sed
              lectus aliquam eleifend. Fusce sagittis eget elit non euismod.
              Donec eu metus dictum, tempus odio nec, cursus eros. Interdum et
              malesuada fames ac ante ipsum primis in faucibus. Fusce tempor
              finibus magna. Nunc pharetra lectus at turpis consequat, nec
              porttitor felis porta. Fusce nec quam fermentum, cursus mauris ac,
              sollicitudin dui. Pellentesque eget gravida nisl. Nunc quis mi
              rutrum, ornare leo eu, cursus ex. Vivamus congue sapien eget urna
              auctor euismod. Aenean id nisi in odio pretium maximus.
            </p>
            <Link to="/election" className="btn btn-cz disabled">
              Apply For Election
            </Link>
          </div>
        </div>
        <div className="row landing-page-section-lighter">
          <div className="col-6">
            <h1>Tendor and Auction</h1>
            <p className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              sollicitudin ante nisl, in feugiat odio rutrum at. Duis et lacus
              sit amet risus sollicitudin tristique sed vitae metus. Vestibulum
              ultricies ligula vitae porta blandit. Vestibulum porta arcu sed
              lectus aliquam eleifend. Fusce sagittis eget elit non euismod.
              Donec eu metus dictum, tempus odio nec, cursus eros. Interdum et
              malesuada fames ac ante ipsum primis in faucibus. Fusce tempor
              finibus magna. Nunc pharetra lectus at turpis consequat, nec
              porttitor felis porta. Fusce nec quam fermentum, cursus mauris ac,
              sollicitudin dui. Pellentesque eget gravida nisl. Nunc quis mi
              rutrum, ornare leo eu, cursus ex. Vivamus congue sapien eget urna
              auctor euismod. Aenean id nisi in odio pretium maximus.
            </p>
            <Link to="/tendor" className="btn btn-cz disabled">
              Bid Now
            </Link>
          </div>
          <div className="col-6 align-self-center justify-content-center text-center">
            <img src={require("../../assets/icons/icon-tracking.svg")} alt="" />
          </div>
        </div>
        <div className="row landing-page-section-darker">
          <div className="col-6 align-self-center justify-content-center text-center">
            <img src={require("../../assets/icons/icon-ad.svg")} alt="" />
          </div>
          <div className="col-6">
            <h1>Advertisement</h1>
            <p className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              sollicitudin ante nisl, in feugiat odio rutrum at. Duis et lacus
              sit amet risus sollicitudin tristique sed vitae metus. Vestibulum
              ultricies ligula vitae porta blandit. Vestibulum porta arcu sed
              lectus aliquam eleifend. Fusce sagittis eget elit non euismod.
              Donec eu metus dictum, tempus odio nec, cursus eros. Interdum et
              malesuada fames ac ante ipsum primis in faucibus. Fusce tempor
              finibus magna. Nunc pharetra lectus at turpis consequat, nec
              porttitor felis porta. Fusce nec quam fermentum, cursus mauris ac,
              sollicitudin dui. Pellentesque eget gravida nisl. Nunc quis mi
              rutrum, ornare leo eu, cursus ex. Vivamus congue sapien eget urna
              auctor euismod. Aenean id nisi in odio pretium maximus.
            </p>
            <Link to="/advertisement" className="btn btn-cz disabled">
              Sell or Buy Items
            </Link>
          </div>
	</div>*/}
      </div>
    );
  }
}

export default Home;
