import React from 'react';
import Head from 'next/head';
import Root from '../components/common/Root';
import Footer from '../components/common/Footer';

const About = () => (
  <Root>
    <Head>
      <title>About Lanepark | Modern Minimalism Meets Sustainability</title>
    </Head>
    <div className="about-container">
      {/* Row 1: Lanepark Introduction */}
      <div className="row mt-5 pt-5 about-hero">
        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
          <div className="h-100 d-flex flex-column py-5 px-4 px-sm-5 justify-content-center">
            <h2 className="font-size-header mb-4">
              Discover Lanepark
            </h2>
            <p className="font-size-subheader mb-4">
              Lanepark is the epitome of modern minimalism, merging sleek design with functional elegance. Our vision is to craft clothing that supports a mindful lifestyle without compromising on style or sustainability. Each piece in our collection reflects our dedication to ethical practices, premium materials, and timeless designs. Immerse yourself in our world of everyday essentials, professional ensembles, and leisurely attire—all underpinned by our minimalist ethos and commitment to the planet.
            </p>
            <div className="about-lanepark mt-3 d-flex flex-row">
              <a className="px-4 py-3 font-color-white about-explore" href="/collections" rel="noopener noreferrer">
                Explore Collections
              </a>
              <a className="px-4 py-3 about-sustainability" href="/sustainability" rel="noopener noreferrer">
                Our Commitment
              </a>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              {/* Adjusted image size with inline styling */}
              <img src="/minimalist-fashion-illustration.jpg" alt="Lanepark Collections" style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Row 2: Sustainability and Quality */}
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              {/* Adjusted image size with inline styling */}
              <img src="/eco-friendly-fashion-illustration.jpg" alt="Sustainability at Lanepark" style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
            </div>
          </div>
        </div>

        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
          <div className="h-100 d-flex flex-column justify-content-center py-5 px-4 px-sm-5">
            <h3 className="font-size-header mb-4">
              Our Ethos: Quality & Sustainability
            </h3>
            <p className="font-size-subheader mb-4">
              Lanepark stands at the intersection of innovation and responsibility. Our approach to sustainability transcends mere trends, focusing on meaningful impacts. We embrace materials and processes that respect the earth, ensuring durability and comfort without compromise. Learn about our journey towards sustainability, where every choice is guided by integrity and a vision for a better world.
            </p>
            <div className="mt-3">
              <a
                className="px-4 py-3 flex-grow-1 font-color-white about-quality"
                href="/quality-sustainability"
                rel="noopener noreferrer"
              >
                Discover More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Row 3: Engage and Connect */}
      <div className="row">
        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
          <div className="h-100 d-flex flex-column justify-content-center py-5 px-4 px-sm-5">
            <h3 className="font-size-header mb-4">
              Join Our Community
            </h3>
            <p className="font-size-subheader mb-4">
              Embrace a lifestyle of thoughtful elegance with Lanepark. Stay informed about our evolving collections and gain exclusive access to offers designed just for you. Engage with us for insights into sustainability, styling tips, and the latest in minimalist fashion. Your path to a refined and conscious wardrobe begins with Lanepark.
            </p>
            <div className="mt-3">
              <a
                className="px-4 py-3 flex-grow-1 font-color-white about-connect"
                href="/contact"
                rel="noopener noreferrer"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              {/* Adjusted image size with inline styling */}
              <img src="/community-illustration.jpg" alt="Connect with Lanepark" style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </Root>
);

export default About;
