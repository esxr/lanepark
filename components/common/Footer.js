import React from 'react';

const Footer = () => (
  <footer className="pt-5">
    <div className="custom-container mb-5 pb-5 pt-5">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4">
          <p className="font-family-secondary font-size-display1 mb-4">
            Lanepark
          </p>
          <div className="d-flex font-color-medium mb-5 pb-3 pb-md-0 mb-md-0">
            <div className="pr-5">
              <a
                href="/about"
                className="mb-3 d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                About Us
              </a>
              <a
                href="/collections"
                className="d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Our Collections
              </a>
            </div>
            <div>
              <a
                href="/sustainability"
                className="mb-3 d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sustainability
              </a>
              <a
                href="/contact"
                className="d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <p className="font-family-secondary font-size-display1 mb-4">
            Connect with Us
          </p>
          <div className="d-flex font-color-medium mb-5 pb-3 pb-md-0 mb-md-0">
            <div className="pr-5">
              <a
                href="https://twitter.com/lanepark"
                className="mb-3 d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <a
                href="https://www.instagram.com/lanepark/"
                className="d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
            <div>
              <a
                href="https://www.pinterest.com/lanepark"
                className="mb-3 d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pinterest
              </a>
              <a
                href="https://www.linkedin.com/company/lanepark"
                className="d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <p className="font-family-secondary font-size-display1 mb-3">
            Join Our Newsletter
          </p>
          <div className="position-relative">
            <input
              className="borderbottom border-color-gray400 h-48 w-100 px-3"
              placeholder="Your email address"
            />
            <button className="bg-transparent position-absolute right-0 top-50 translateY--50 pr-2 h-48">
              <img src="/icon/arrow-long-right.svg" className="w-24" alt="Subscribe"/>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="pt-md-5">
      <div className="bg-brand300">
        <div className="custom-container d-flex flex-column flex-md-row align-items-center justify-content-between">
          <div className="pt-5 pb-0 pt-md-4 pb-md-4 d-flex align-items-center flex-wrap justify-content-center">
            <p className="font-color-brand font-size-caption text-uppercase text-center">
              Explore Lanepark
            </p>
            <p className="px-2 font-color-brand font-size-caption">-</p>
            <a
              href="/collections"
              className="font-color-brand font-size-caption text-uppercase text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discover Our Styles
            </a>
            <p className="px-2 font-color-brand font-size-caption">-</p>
            <a
              href="/sustainability"
              className="font-color-brand font-size-caption text-uppercase text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Our Commitment to Sustainability
            </a>
          </div>
          <div className="font-color-brand font-size-caption py-4 text-right">
            <a
                href="/"
                className="font-color-brand font-size-caption text-uppercase text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                &copy; { new Date().getFullYear() } Lanepark.
              </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
